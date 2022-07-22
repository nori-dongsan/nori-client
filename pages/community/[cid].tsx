import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import CommunityCategory from '../../components/community/CommunityCategory';
import DetailFloatingBtn from '../../components/community/DetailFloatingBtn';
import ReplyList from '../../components/community/ReplyList';
import {
  deleteCommunity,
  useGetCommunityDetail,
} from '../../core/api/community';
import { IcExpandImg, IcMenu, IcWriter } from '../../public/assets/icons';
import { CommunityData } from '../../types/community';

export default function CommunityDetail() {
  const router = useRouter();

  const cid = router.query.cid as string;

  const { data } = useGetCommunityDetail(cid);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [expandedImg, setExpandedImg] = useState<string>('');
  const [dataList, setDataList] = useState<CommunityData>();

  useEffect(() => {
    if (data) {
      setDataList({
        id: data.id,
        author: data.author,
        category: data.category,
        title: data.title,
        content: data.content,
        userNickname: data.userNickname,
        replyCount: data.replyCount,
        createdAt: data.createdAt,
        imageList: data.imageList,
        replyList: data.replyList,
      });
    }
  }, [data]);

  const handleMenu = () => {
    setIsMenu((prev) => !prev);
  };

  const handleExpanded = (src?: string) => {
    if (src) setExpandedImg(src);
    setIsExpanded((prev) => !prev);
  };

  const handleDelete = async () => {
    const val = confirm(
      '삭제하시겠어요? 삭제 시, 해당 글과 댓글은 복구되지 않습니다.',
    );

    if (val && cid) {
      const status = await deleteCommunity(cid);
      if (status === 200) router.replace('/community');
    }
  };
  console.log(dataList);

  return (
    <StCommunityMain>
      {dataList && (
        <>
          <StDetailSection>
            <StCommunitySection>
              <StCommunityArticle>
                <CommunityCategory category={dataList.category} />
                <StCommunityHeader>{dataList.title}</StCommunityHeader>
                <StCommunityInfoWrapper>
                  <StCommunityInfo>
                    <StNickNameInfo>
                      {dataList.author && <IcWriter />}
                      <span>{dataList.userNickname}</span>
                    </StNickNameInfo>
                    <span>{dataList.createdAt.split('T')[0]}</span>
                  </StCommunityInfo>
                  <StCommunityMenu>
                    <IcMenu
                      css={css`
                        cursor: pointer;
                      `}
                      onClick={handleMenu}
                    />
                  </StCommunityMenu>
                  {isMenu && (
                    <StMenuWrapper onClick={handleMenu}>
                      {dataList.author ? (
                        <StMenuList isWriter={dataList.author}>
                          <Link href={`/write/${cid}`}>
                            <li>
                              <a>수정하기</a>
                            </li>
                          </Link>
                          <li onClick={handleDelete}>삭제하기</li>
                        </StMenuList>
                      ) : (
                        <StMenuList isWriter={dataList.author}>
                          <li>신고하기</li>
                        </StMenuList>
                      )}
                    </StMenuWrapper>
                  )}
                </StCommunityInfoWrapper>
                <StCommunityContent>
                  <StImgWrapper>
                    {dataList.imageList.map((item, idx) => (
                      <StPreviewImgWrapper key={idx}>
                        <StPreviewImg
                          src={
                            'https://nori-community.s3.ap-northeast-2.amazonaws.com/' +
                            item
                          }
                          alt={item}
                        />
                        <StExpandImgIcon onClick={() => handleExpanded(item)} />
                      </StPreviewImgWrapper>
                    ))}
                  </StImgWrapper>
                  <StContent>{dataList.content}</StContent>
                </StCommunityContent>
              </StCommunityArticle>
            </StCommunitySection>
            <ReplyList replyList={dataList.replyList} cid={cid} />
          </StDetailSection>
          <DetailFloatingBtn heartNum={0} replyNum={dataList.replyCount} />
          {isExpanded && (
            <StExpandedImgWrapper onClick={() => handleExpanded()}>
              <StExpandedImg
                src={
                  'https://nori-community.s3.ap-northeast-2.amazonaws.com/' +
                  expandedImg
                }
                alt="expanded"
              />
            </StExpandedImgWrapper>
          )}
        </>
      )}
    </StCommunityMain>
  );
}

type Props = {
  data: Omit<CommunityData, 'image'>;
};
interface Params extends ParsedUrlQuery {
  cid: string;
}

// export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
//   params,
// }) => {
//   const res = await getCommunityDetail(params!.cid);
//   // console.log(LocalStorage.getItem('accessToken'));
//   console.log('==커뮤니티 디테일==');
//   console.log(res);
//   return {
//     props: {
//       data: { ...res.data.data, id: params!.cid },
//     },
//   };
// };

const StCommunityMain = styled.main`
  display: flex;
  justify-content: center;

  padding-top: 7rem;
  padding-bottom: 12rem;
`;
const StDetailSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const StCommunitySection = styled.section`
  width: 77.6rem;
  margin-bottom: 5.7rem;
`;
const StCommunityHeader = styled.header`
  margin-top: 1.2rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.t5_27_medium_150}
`;
const StCommunityArticle = styled.article`
  display: flex;
  flex-direction: column;
`;
const StCommunityInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray004};
`;
const StCommunityInfo = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.colors.gray006};
    ${({ theme }) => theme.fonts.b5_14_regular_140}
  }
`;
const StNickNameInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  margin-bottom: 0.4rem;

  & > span {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.t6_17_medium_130}
  }
`;
const StCommunityMenu = styled.div`
  padding-top: 0.9rem;
`;
const StCommunityContent = styled.div`
  padding-top: 4.5rem;
  padding-bottom: 4rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray004};
`;
const StImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.4rem;

  margin-bottom: 3rem;
`;
const StPreviewImgWrapper = styled.div`
  position: relative;

  &:hover {
    & > svg {
      visibility: visible;
    }
  }
`;
const StExpandImgIcon = styled(IcExpandImg)`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;

  visibility: hidden;

  cursor: pointer;
`;
const StPreviewImg = styled.img`
  width: 24.3rem;
  height: 24.3rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.6rem;

  object-fit: cover;
`;
const StContent = styled.div`
  white-space: pre-wrap;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.t6_17_regular_170};
`;
const StMenuWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
const StMenuList = styled.ul<{ isWriter: boolean }>`
  position: absolute;
  top: 4.1rem;
  right: 0;

  padding: 1.5rem 1.8rem;
  width: 11.9rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray004};
  border-radius: 0.491rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 4.91436px rgba(0, 0, 0, 0.08);

  z-index: 1;

  li {
    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b5_14_medium_140}

    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;
const StExpandedImgWrapper = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 3;
  cursor: pointer;

  background: rgba(31, 34, 32, 0.8);
`;
const StExpandedImg = styled.img`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// decodeURIComponent(
//   'https://nori-image.s3.ap-northeast-2.amazonaws.com/장난감점빵/[대여](미개봉새상품) 타이니러브 수더앤그루브 프린세스테일즈모빌 (흑백+칼라+거치대+건전지포함) 플러스패키지.jpg',
// )

// encodeURIComponent(
//   'https://nori-image.s3.ap-northeast-2.amazonaws.com/장난감점빵/[대여](미개봉새상품) 타이니러브 수더앤그루브 프린세스테일즈모빌 (흑백%2b칼라%2b거치대%2b건전지포함) 플러스패키지.jpg',
// )

// let replaced_str = str.replace(/\+/g, '%2b');
