import styled from '@emotion/styled';
import { IcReply, IcHeart, IcDot } from '../../public/assets/icons';
import CommunityCategory from './CommunityCategory';

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
        <CommunityCategory category={category} />
        <h1>{title}</h1>
        <p>{content}</p>
        <StWriteInfo>
          <span>{userNickname}</span>
          <IcDot />
          <span>{createdAt}</span>
        </StWriteInfo>
        <StReplyInfo>
          {/* <IcHeart />
          <span>12</span> */}
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

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray005};

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 0.7rem;

    ${({ theme }) => theme.fonts.b9_24_medium_150}
  }

  p {
    margin-bottom: 2.7rem;

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
const StContentImg = styled.img`
  width: 21.6rem;
  height: 21.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 0.5rem;
`;
const StWriteInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.2rem;

  span:first-child {
    margin-right: 1rem;

    color: ${({ theme }) => theme.colors.gray008};
    ${({ theme }) => theme.fonts.b4_15_semibold_146}
  }

  span:last-child {
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
