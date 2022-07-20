import styled from '@emotion/styled';
import { CommunityList } from '../../components/community';
import {
  LandingCommunityList,
  LandingTitle,
} from '../../components/landing/community';
import { GetServerSideProps } from 'next';
import CommunityFloatingBtn from '../../components/community/CommunityFloatingBtn';
import { IcCommunitySearchIcon } from '../../public/assets/icons';
import { useEffect, useState } from 'react';
import { GetCommunityList, CommunityData } from '../../types/community';
import { PageNavigation } from '../../components/collectionProduct';
import {
  getCommunityList,
  useGetCommunityList,
} from '../../core/api/community';

// const limit = 10;

export default function community() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [contentList, setContentList] = useState<CommunityData[]>([]);
  // const [currentPage, setCurrentPage] = useState<number>(1);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('/board')
  //     .then((res) => res.json())
  //     .then((data: CommunityData[]) => {
  //       setContentList(data);
  //       setIsLoading(false);
  //     });
  // }, []);

export const getServerSideProps: 

  return (
    <StCommunityWrapper>
      {isLoading ? (
        <>
          <LandingTitle />
          <LandingCommunityList />
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
          <StMainArticle>
            <StContentBlock>
              {contentList.map((_, idx) => (
                <CommunityList key={idx} contentsList={contentList} />
              ))}
            </StContentBlock>
            <CommunityFloatingBtn />
          </StMainArticle>
          {/* {!isLoading && !isError && communityList && (
            <PageNavigation
              currentPage={currentPage}
              lastPage={Math.ceil(contentList.length / limit)}
              handleCurrentPage={handleCurrentPage}
            />
          )} */}
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

  margin-bottom: 7.9rem;

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

    cursor: pointer;
  }
`;
const StMainArticle = styled.article`
  display: flex;
`;
const StContentBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
