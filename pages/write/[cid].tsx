import styled from '@emotion/styled';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useCommunityDetail } from '../../core/api/community';
import { isChangeInfoState, newPostInfoState } from '../../core/atom';
import { IcDefaultImg, IcDelete } from '../../public/assets/icons';
import { CommunityData, ImgData } from '../../types/community';

export default function UpdateForm() {
  const router = useRouter();

  const cid = router.query.cid as string;

  const { data } = useCommunityDetail(cid);

  const [newPostInfo, setNewPostInfo] = useRecoilState(newPostInfoState);
  const [isChangeCommunity, setIsChangeCommunity] =
    useRecoilState(isChangeInfoState);
  const [isCategory, setIsCategory] = useState<boolean>(false);
  const [images, setImages] = useState<ImgData[]>([]);
  const [imagesSize, setImagesSize] = useState<number>(0);

  const [category, setCategory] = useState<string>('후기');
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (data) {
      setCategory(data.category);
      setContent(data.content);
      setTitle(data.title);

      const imageList: ImgData[] = [];
      data.imageList.forEach(async (image, index) => {
        const file = await convertURLtoFile(
          'https://nori-community.s3.ap-northeast-2.amazonaws.com/' + image,
        );
        setImagesSize((prev) => prev + file.size);
        imageList.push({
          id: index,
          src: image,
          file: file,
        });
      });

      setImages(imageList);
    }
  }, []);

  const menu = ['후기', '질문', '정보 공유'];

  const convertURLtoFile = async (url: string) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split('.').pop(); // url 구조에 맞게 수정할 예정
    const filename = url.split('/').pop(); // url 구조에 맞게 수정할 예정
    const metadata = { type: `image/${ext}` };
    return new File([data], filename!, metadata);
  };

  const handleIsCategory = () => {
    setIsCategory((prev) => !prev);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
    setIsChangeCommunity({
      ...isChangeCommunity,
      isChangeCategory: true,
    });
    setNewPostInfo({ ...newPostInfo, category: value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList = e.target.files as FileList;
    if (images.length + fileList.length > 3) {
      alert('사진은 최대 3개까지 가능합니다.');
      return;
    }

    const imageList: ImgData[] = [];
    let prevId = images.length == 0 ? 0 : images[images.length - 1].id;
    Array.from(fileList).map((file) => {
      imageList.push({
        id: prevId + 1,
        src: URL.createObjectURL(file),
        file,
      });
      prevId++;
    });

    let totalImagesSize = imagesSize;
    imageList.map((image) => (totalImagesSize += image.file.size));

    if (totalImagesSize > 15 * 1024 * 1024) {
      alert('용량 초과로 업로드에 실패하였습니다.(최대 15MB)');
      return;
    }
    setImagesSize(totalImagesSize);
    setIsChangeCommunity({
      ...isChangeCommunity,
      isChangeImageList: true,
    });
    setNewPostInfo({
      ...newPostInfo,
      imageList,
    });
    setImages([...images, ...imageList]);
  };

  const handleDeleteImg = (id: number) => {
    const imgDelData = images.filter((image) => image.id !== id);
    const delImg = images.filter((image) => image.id === id);

    setImagesSize((prev) => prev - delImg[0].file.size);
    setIsChangeCommunity({
      ...isChangeCommunity,
      isChangeImageList: true,
    });
    setNewPostInfo({
      ...newPostInfo,
      imageList: imgDelData,
    });
    setImages(imgDelData);
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setTitle(e.target.value);
    setIsChangeCommunity({
      ...isChangeCommunity,
      isChangeTitle: true,
    });
    setNewPostInfo({ ...newPostInfo, title: e.target.value });
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setIsChangeCommunity({
      ...isChangeCommunity,
      isChangeContent: true,
    });
    setNewPostInfo({ ...newPostInfo, content: e.target.value });
  };

  const handleResizeHeight = () => {
    if (textRef.current)
      textRef.current.style.height = `${textRef.current.scrollHeight / 10}rem`;
  };

  return (
    <StFormMain>
      <StFormSection>
        <StFormArticle
          textHeight={textRef.current ? textRef.current.scrollHeight : 0}
        >
          <StCategorySelectBox isCategory={isCategory}>
            <StCategoryBtn onClick={handleIsCategory}>{category}</StCategoryBtn>
            {isCategory && (
              <StCategoryWrapper onClick={handleIsCategory}>
                <StCategoryList>
                  {menu.map((item, idx) => (
                    <StCategoryItem
                      key={idx}
                      onClick={() => handleCategory(item)}
                      isSelected={item === category}
                    >
                      {item}
                    </StCategoryItem>
                  ))}
                </StCategoryList>
              </StCategoryWrapper>
            )}
          </StCategorySelectBox>
          <StCategoryInputWrapper>
            <input
              type="text"
              value={title}
              onChange={handleTitle}
              placeholder="제목"
            />
            <span>{title.length} / 30</span>
          </StCategoryInputWrapper>
          <textarea
            ref={textRef}
            value={content}
            onChange={handleContent}
            onInput={handleResizeHeight}
            placeholder={
              category === '후기'
                ? '우리 아이 장난감 구매 후기를 들려주세요'
                : category === '질문'
                ? '궁금한 점을 질문해보세요'
                : '장난감에 대해 알고 있는 어떤 정보든 공유해주세요!'
            }
          />
          <StImgSection>
            <StImgInputWrapper>
              <StImgInputLabel htmlFor="input-file">
                <IcDefaultImg />
                <span>{`(${images.length}/3)`}</span>
              </StImgInputLabel>
              <input
                type="file"
                accept="image/*"
                id="input-file"
                style={{ display: 'none' }}
                multiple
                onChange={handleFile}
              />
              {images.length > 0 &&
                images.map((image) => (
                  <StPreviewImgWrapper key={image.id}>
                    <StPreviewImg
                      src={
                        'https://nori-community.s3.ap-northeast-2.amazonaws.com/' +
                        image.src
                      }
                      alt={String(image.id)}
                    />
                    <StIcDelete onClick={() => handleDeleteImg(image.id)} />
                  </StPreviewImgWrapper>
                ))}
            </StImgInputWrapper>
          </StImgSection>
        </StFormArticle>
      </StFormSection>
    </StFormMain>
  );
}

const StFormMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6rem;
  margin-bottom: 12rem;
`;
const StFormSection = styled.section`
  width: 77.6rem;
`;
const StFormArticle = styled.article<{ textHeight: number }>`
  display: flex;
  flex-direction: column;

  & > textarea {
    width: 100%;
    height: ${({ textHeight }) =>
      textHeight ? `${textHeight / 10}rem` : 'auto'};
    margin-bottom: 3rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.b8_20_regular_180}

    overflow-y: hidden;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray005};
      ${({ theme }) => theme.fonts.b8_20_regular_180}
    }
  }
`;
const StCategoryInputWrapper = styled.div`
  margin-bottom: 4.5rem;

  border-bottom: 0.093rem solid #d6d6d6;

  & > input {
    width: 67.2rem;
    margin-bottom: 1.5rem;
    margin-right: 4.4rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.t5_27_regular_130}

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray006};
      ${({ theme }) => theme.fonts.t5_27_regular_130}
    }
  }

  & > span {
    color: ${({ theme }) => theme.colors.gray005};
    ${({ theme }) => theme.fonts.b2_18_medium_130}
  }
`;

const StCategorySelectBox = styled.div<{ isCategory: boolean }>`
  position: relative;

  width: 11.9rem;
  height: 4rem;
  margin-bottom: 4.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  border-radius: 0.6rem;
  background: ${({ isCategory }) =>
      isCategory
        ? "url('/assets/icons/dropDownIcon2.svg')"
        : "url('/assets/icons/dropDownIcon1.svg')"}
    calc(100% - 1.738rem) center no-repeat;
`;
const StImgSection = styled.section`
  width: 100%;
`;
const StImgInputWrapper = styled.div`
  display: flex;
`;
const StImgInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 17.6rem;
  height: 17.6rem;
  margin-right: 2.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray002};

  cursor: pointer;

  & > span {
    margin-top: 0.587rem;

    color: ${({ theme }) => theme.colors.gray005};
    ${({ theme }) => theme.fonts.b6_13_medium_120};
  }
`;
const StPreviewImgWrapper = styled.div`
  position: relative;
`;
const StIcDelete = styled(IcDelete)`
  position: absolute;
  top: 1rem;
  right: 3.4rem;

  cursor: pointer;
`;
const StPreviewImg = styled.img`
  width: 17.6rem;
  height: 17.6rem;

  border-radius: 0.8rem;

  object-fit: cover;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
const StCategoryBtn = styled.button`
  display: flex;
  align-items: center;

  width: inherit;
  height: inherit;
  padding-left: 1.8rem;

  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.b3_16_medium_140};
`;
const StCategoryWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
const StCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 9.7rem;
  left: 5.9rem;
  transform: translate(-50%, -50%);

  width: 11.9rem;
  padding: 1.5rem 1.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  border-radius: 0.491rem;
  box-shadow: 0.1rem 0.1rem 0.491rem rgba(0, 0, 0, 0.08);
  background-color: ${({ theme }) => theme.colors.white};
`;
const StCategoryItem = styled.li<{ isSelected: boolean }>`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ isSelected, theme: { colors } }) =>
    isSelected ? colors.mainDarkgreen : colors.gray007};
  ${({ theme }) => theme.fonts.b5_14_medium_140}

  cursor: pointer;

  &:not(:last-child) {
    padding-bottom: 1rem;
  }
`;
