import styled from '@emotion/styled';
import { IcReply, IcHeart, IcDot } from '../../public/assets/icons';
import CommunityCategory from './CommunityCategory';
import Router from 'next/router';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface ContentInfoProps {
  id: string;
  category: string;
  title: string;
  content: string;
  userNickname?: string;
  replyCount?: number;
  createdAt?: string;
  img?: string;
}

export default function ContentCard(props: ContentInfoProps) {
  const {
    id,
    category,
    title,
    content,
    userNickname,
    replyCount,
    createdAt,
    img,
  } = props;

  return (
    <StContentsCardWrapper>
      <StContentInfo>
        <CommunityCategory category={category} />
        <StMainInfo
          onClick={() => Router.push({ pathname: `/community/${id}` })}
        >
          <h1>{title}</h1>
          <p>{content}</p>
        </StMainInfo>
        <StWriteInfo>
          <span>{userNickname}</span>
          <IcDot />
          <span>{createdAt}</span>
        </StWriteInfo>
        <StReplyInfo>
          <IcHeart />
          <span>12</span>
          <IcReply />
          <span>{replyCount}</span>
        </StReplyInfo>
      </StContentInfo>
      {img && <StContentImg src={img} alt="리뷰 사진" />}
    </StContentsCardWrapper>
  );
}

const StContentsCardWrapper = styled.div`
  display: flex;

  margin-bottom: 4.8rem;
  padding-bottom: 4.5rem;

  width: 97.6rem;
  height: auto;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray005};

  h1 {
    width: 92.3rem;
    margin-top: 1.6rem;
    margin-bottom: 0.7rem;

    ${({ theme }) => theme.fonts.b9_24_medium_150}

    cursor: pointer;
  }

  p {
    margin-bottom: 2.7rem;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${({ theme }) => theme.colors.gray009};
    ${({ theme }) => theme.fonts.t6_17_regular_140}

    cursor: pointer;
  }
`;
const StMainInfo = styled.article``;
const StContentInfo = styled.section`
  display: flex;
  flex-direction: column;

  width: auto;
`;
const StContentImg = styled.img`
  width: 21.8rem;
  height: 21.8rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.5rem;

  object-fit: cover;
`;
const StWriteInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.2rem;

  span:first-of-type {
    margin-right: 1rem;

    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b4_15_semibold_146}
  }

  span:last-of-type {
    margin-left: 1rem;

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

    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b4_15_medium_140};
  }
`;
