import styled from '@emotion/styled';
import { useState } from 'react';
import { IcComment, IcHeart } from '../../public/assets/icons';

interface ContentsInfo {
  category: string;
  title: string;
  content: string;
  userNickname: string;
  replyCount: number;
  createdAt: string;
  img?: string;
}

export default function ContentCard(props: ContentsInfo) {
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
          <IcComment />
          <span>{replyCount}</span>
        </StReplyInfo>
      </StContentInfo>
      {img === undefined ? <></> : <StContentImg src={img} />};
    </StContentsCardWrapper>
  );
}

const StContentsCardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 120rem;
  height: auto;

  margin-bottom: 4.8rem;
  padding-bottom: 4.5rem;
  border-bottom: 1px solid #d6d6d6;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 33px;

    margin-bottom: 1.1rem;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;

    margin-bottom: 2.7rem;
  }
`;
const StContentInfo = styled.section`
  width: auto;

  margin-right: 4.9rem;
`;

const StCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10.2rem;
  height: 3.2rem;

  margin-bottom: 2.6rem;

  border-radius: 4.5rem;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  color: ${({ theme }) => theme.colors.white};
`;
const StCategoryReview = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainGreen};
`;
const StCategoryQuestion = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.black};
`;
const StCategoryInfo = styled(StCategory)`
  background-color: ${({ theme }) => theme.colors.mainDarkgreen};
`;

const StContentImg = styled.img`
  width: 26rem;
  height: 25.5rem;
`;
const StWriteInfo = styled.div`
  margin-bottom: 1.2rem;

  span:first-child {
    margin-right: 1.3rem;

    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
  }

  span:last-child {
    font-style: normal;
    font-weight: 350;
    font-size: 17px;
    line-height: 25px;
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
    font-size: 17.6098px;
    line-height: 25px;
  }
`;
