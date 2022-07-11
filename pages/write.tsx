import styled from '@emotion/styled';
import React, { useState } from 'react';
import { IcDefaultImg, IcDelete } from '../public/assets/icons';

interface IImage {
  id: number;
  src: string;
}

export default function Write() {
  const [isCategory, setIsCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('카테고리');
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [images, setImages] = useState<IImage[]>([]);

  const handleIsCategory = () => {
    setIsCategory((prev) => !prev);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList = e.target.files as FileList;
    if (images.length + fileList.length > 3) {
      alert('사진은 최대 3개까지 가능합니다.');
      return;
    }

    const imageList: IImage[] = [];
    let prevId = images.length == 0 ? 0 : images[images.length - 1].id;
    const formData = new FormData();
    Array.from(fileList).map((file) => {
      formData.append('images', file);
      imageList.push({
        id: prevId + 1,
        src: URL.createObjectURL(file),
      });
      prevId++;
    });
    setImages([...images, ...imageList]);
  };

  const handleDeleteImg = (id: number) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <StFormMain>
      <StFormArticle>
        <StTitleSection>글쓰기</StTitleSection>
        <StFormSection>
          <StCategorySelectBox>
            <StCategoryBtn onClick={handleIsCategory}>{category}</StCategoryBtn>
          </StCategorySelectBox>
          <input
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="제목"
          />
          <textarea
            value={content}
            onChange={handleContent}
            placeholder="내용을 작성해주세요."
          />
          <StImgSection>
            <StImgTitleSection>사진 첨부 (최대 3장)</StImgTitleSection>
            <StImgInputWrapper>
              <StImgInputLabel htmlFor="input-file">
                <IcDefaultImg />
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
                    <StPreviewImg src={image.src} alt={String(image.id)} />
                    <StIcDelete onClick={() => handleDeleteImg(image.id)} />
                  </StPreviewImgWrapper>
                ))}
            </StImgInputWrapper>
          </StImgSection>
        </StFormSection>
      </StFormArticle>
      <StSubmitBtn>작성완료</StSubmitBtn>
      {isCategory && (
        <StCategoryWrapper onClick={handleIsCategory}>
          <StCategoryList>
            <li onClick={() => handleCategory('질문')}>질문</li>
            <li onClick={() => handleCategory('후기')}>후기</li>
            <li onClick={() => handleCategory('정보 공유')}>정보 공유</li>
          </StCategoryList>
        </StCategoryWrapper>
      )}
    </StFormMain>
  );
}

const StFormMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 4.6rem;
  padding-bottom: 24rem;
`;
const StFormArticle = styled.article`
  width: 99.6rem;
`;
const StTitleSection = styled.section`
  padding-bottom: 6.3rem;

  color: #000000;
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 4.6rem;

  text-align: center;
`;
const StFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > input {
    width: 100%;
    height: 4rem;
    padding: 0.8rem 2rem;
    margin-bottom: 1.4rem;

    border: 1px solid #d9d9d9;
    border-radius: 0.5rem;

    &::placeholder {
      color: #999999;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }

  & > textarea {
    width: 100%;
    height: 46.5rem;
    padding: 1.6rem 1.7rem;
    margin-bottom: 3.2rem;

    border: 1px solid #d9d9d9;
    border-radius: 0.5rem;

    &::placeholder {
      color: #999999;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
  }
`;
const StCategorySelectBox = styled.div`
  position: relative;

  width: 100%;
  height: 4rem;
  margin-bottom: 0.8rem;

  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  background: url('/assets/icons/dropDownIcon.svg') calc(100% - 17px) center
    no-repeat;
`;
const StImgSection = styled.section`
  width: 100%;
  margin-bottom: 7.4rem;

  overflow: auto;
  overflow-y: hidden;
`;
const StImgInputWrapper = styled.div`
  display: flex;
`;
const StImgTitleSection = styled.section`
  margin-bottom: 1.3rem;

  color: #999999;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.9rem;
`;
const StImgInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 25rem;
  height: 25rem;
  margin-right: 2.1rem;

  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;

  cursor: pointer;
`;
const StPreviewImgWrapper = styled.div`
  position: relative;
`;
const StIcDelete = styled(IcDelete)`
  position: absolute;
  top: 1.4rem;
  right: 3.7rem;

  cursor: pointer;
`;
const StPreviewImg = styled.img`
  width: 25rem;
  height: 25rem;
  margin-right: 2.1rem;

  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;

  object-fit: fill;
`;
const StSubmitBtn = styled.button`
  width: 79.8rem;
  height: 5.9rem;

  border: 1px solid #1db981;
  border-radius: 0.5rem;
  background-color: #1db981;
  color: #ffffff;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.9rem;
`;
const StCategoryBtn = styled.button`
  display: flex;
  align-items: center;

  width: inherit;
  height: inherit;
  padding-left: 2rem;

  background: transparent;
  color: #999999;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.3rem;
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
  top: 37rem;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 99.6rem;

  border: 1px solid #d9d9d9;
  border-radius: 0.5rem;
  background-color: white;

  li {
    width: 95%;
    height: 4rem;
    padding-left: 2rem;

    background-color: white;
    color: #999999;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 4rem;

    cursor: pointer;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
  }
`;
