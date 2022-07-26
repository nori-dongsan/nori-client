import styled from '@emotion/styled';
import { ContentCard, CommunityFloatingBtn } from '../../components/community';
import {
  LandingCommunityList,
  LandingTitle,
} from '../../components/landing/community';
import { IcCommunitySearchIcon } from '../../public/assets/icons';
import { useEffect, useState } from 'react';
import { CommunityData } from '../../types/community';

import { PageNavigation } from '../../components/common';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getCommunity } from '../../core/api/community';
import { useRouter } from 'next/router';
import { communityMockData } from '../../mocks/data/communityMockData';
import { LandingPageNavigation } from '../../components/landing/collectionProduct.tsx';

const limit = 20;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getCommunity();
  return {
    props: res.data,
  };
};

export default function community({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contentList, setContentList] = useState<CommunityData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isCategory, setIsCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('모든 글');

  const menu = ['모든 글', '후기', '질문', '정보 공유'];

  const handleIsCategory = () => {
    setIsCategory((prev) => !prev);
  };

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };
  console.log('후기 ', data);
  useEffect(() => {
    if (data) {
      data = data.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 20 <= idx && idx < currentPage * 20,
      );
      console.log(data);
      setContentList(data);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }
  }, [data, currentPage]);
  console.log(contentList.length);
  return (
    <StCommunityWrapper>
      {isLoading ? (
        <>
          <LandingTitle />
          <LandingCommunityList />
          <LandingPageNavigation />
        </>
      ) : (
        <>
          <StCommunityTitle>커뮤니티</StCommunityTitle>
          <StSearchBar>
            <input
              type="text"
              placeholder="궁금한 장난감 정보를 검색해보세요:)"
            />
            <IcCommunitySearchIcon />
          </StSearchBar>
          <StCategoryBlock>
            <StCategorySelectBox isCategory={isCategory}>
              <StCategoryBtn onClick={handleIsCategory}>
                {category}
              </StCategoryBtn>
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
          </StCategoryBlock>
          <StMainArticle>
            <StCommunityListWrapper>
              {contentList.map(
                (
                  {
                    id,
                    category,
                    title,
                    content,
                    userNickname,
                    replyCount,
                    createdAt,
                    image,
                  },
                  idx,
                ) => (
                  <ContentCard
                    id={id}
                    key={idx}
                    category={category}
                    title={title}
                    content={content}
                    userNickname={userNickname}
                    replyCount={replyCount}
                    createdAt={createdAt}
                    img={image}
                  />
                ),
              )}
            </StCommunityListWrapper>
            <CommunityFloatingBtn />
          </StMainArticle>
          {!isLoading && contentList && (
            <PageNavigation
              currentPage={currentPage}
              lastPage={Math.ceil(data.length / limit)}
              handleCurrentPage={handleCurrentPage}
            />
          )}
        </>
      )}
    </StCommunityWrapper>
  );
}

const StCommunityWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StCommunityTitle = styled.h1`
  margin-top: 7.7rem;
  margin-bottom: 9.6rem;
  ${({ theme }) => theme.fonts.t1_28_medium_150};
`;
const StSearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 5.9rem;

  width: 57.6rem;
  height: 4.5rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray008};

  input {
    margin-left: 0.9rem;

    width: 60rem;
    height: 3.3rem;

    font-size: 2.5rem;

    color: ${({ theme }) => theme.colors.gray006};
    ${({ theme }) => theme.fonts.b10_22_regular_150}

    &::placeholder {
      font-family: Pretandard;
      color: ${({ theme }) => theme.colors.gray006};
      ${({ theme }) => theme.fonts.b10_22_regular_150}
    }

    :focus::placeholder {
      opacity: 0;
    }
  }
  & > svg {
    margin-right: 0.9rem;
    /* padding-bottom: 1.4rem; */

    cursor: pointer;
  }
`;
const StMainArticle = styled.article`
  display: flex;
`;
const StCommunityListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 97.6rem;

  margin-bottom: 4.8rem;
`;
const StCategoryBlock = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 97.6rem;
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
  /* position: absolute; */
  /* top: 0;
  left: 0; */

  width: 100%;
  height: 100%;
`;
const StCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: absolute;
  top: 9.7rem;
  left: 5.9rem;
  transform: translate(-50%, -50%); */

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
