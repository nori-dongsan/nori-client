import styled from '@emotion/styled';
import { useState } from 'react';
import { IcReply, IcHeart } from '../../public/assets/icons';

interface ContentInfoProps {
  category: string;
  title: string;
  content: string;
  userNickname: string;
  replyCount: number;
  createdAt: string;
  img?: string;
}

export default function ContentCard(props: ContentInfoProps) {
  const { category, title, content, userNickname, replyCount, createdAt, img } =
    props;

  return (
    <StContentsCardWrapper>
      <StContentInfo>
        {category === '후기' ? (
          <StCategoryReview>{category}</StCategoryReview>
        ) : category === '질문' ? (
          <StCategoryQuestion>{category}</StCategoryQuestion>
        ) : (
          <StCategoryInfo>{category}</StCategoryInfo>
        )}
        <h1>{title}</h1>
        <p>{content}</p>
        <StWriteInfo>
          <span>{userNickname}</span>
          <span>{createdAt}</span>
        </StWriteInfo>
        <StReplyInfo>
          <IcReply />
          <span>{replyCount}</span>
        </StReplyInfo>
      </StContentInfo>
      {img === undefined ? <></> : <StContentImg src={img} alt="리뷰 사진" />}
    </StContentsCardWrapper>
  );
}

const StContentsCardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin-bottom: 4.8rem;
  padding-bottom: 4.5rem;

  width: 97.6rem;
  height: auto;

  border-bottom: 0.1rem solid #d6d6d6;

  h1 {
    margin-bottom: 0.7rem;

    font-style: normal;
    font-weight: 500;
    font-size: 2.3rem;
    line-height: 3.3rem;

    ${({ theme }) => theme.fonts.b9_24_medium_150}
  }

  p {
    margin-bottom: 2.7rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.9rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${({ theme }) => theme.colors.gray009};
    ${({ theme }) => theme.fonts.t6_17_regular_140}
  }
`;
const StContentInfo = styled.section`
  margin-right: 4.9rem;

  width: auto;
`;
const StCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  height: 2.6rem;

  margin-bottom: 1.6rem;

  border-radius: 4.5rem;

  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.b5_14_medium_140}
`;
const StCategoryReview = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainGreen};
`;
const StCategoryQuestion = styled(StCategory)`
  color: ${({ theme }) => theme.colors.gray009};
  background-color: ${({ theme }) => theme.colors.subYellow};
`;
const StCategoryInfo = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
`;
const StContentImg = styled.img`
  width: 21.6rem;
  height: 21.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.5rem;
`;
const StWriteInfo = styled.div`
  margin-bottom: 1.2rem;

  span:first-child {
    margin-right: 1.3rem;

    font-style: normal;
    font-weight: 500;
    font-size: 1.7rem;
    line-height: 2.5rem;

    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b4_15_semibold_146}
  }

  span:last-child {
    font-style: normal;
    font-weight: 350;
    font-size: 1.7rem;
    line-height: 2.5rem;

    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b4_15_regular_146};
  }
`;
const StReplyInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 1.057rem;
    margin-right: 1.898rem;

    font-style: normal;
    font-weight: 400;
    font-size: 1.76rem;
    line-height: 2.5rem;
  }
`;
