import styled from '@emotion/styled';
import { CommunityList } from '../../components/community';
import { IcCommunitySearchIcon } from '../../public/assets/icons';
import Link from 'next/link';
import { useState } from 'react';
import { useGetCommunityList } from '../../core/api/communityList';
import { CommunityData } from '../../types/community';

export default function community() {
  const [contentList, setContentList] = useState<CommunityData[]>([]);
  // const [currentPage, setCurrentPage] = useState<number>();

  return (
    <StCommunityWrapper>
      <StCommunityTitle>커뮤니티</StCommunityTitle>
      <StSearchBar>
        <input type="text" />
        <IcCommunitySearchIcon />
      </StSearchBar>
      <Link href="/write">
        <StWriteBtn>글쓰기</StWriteBtn>
      </Link>
      {contentList.map(<CommunityList contentsList={contentList} />)}
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

  width: 64.2rem;
  height: 4.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  margin-bottom: 7.9rem;

  input {
    width: 60rem;
    height: 2.5rem;

    font-size: 2.5rem;
  }
`;
const StWriteBtn = styled.a`
  padding: 0.9rem 2.5rem;
  margin-bottom: 3.3rem;
  margin-left: 85%;

  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.8rem;

  background-color: #e1ffeb;
  color: ${({ theme }) => theme.colors.mainDarkgreen};
  border: 0.2rem solid ${({ theme }) => theme.colors.mainDarkgreen};
  border-radius: 1rem;

  cursor: pointer;
`;
