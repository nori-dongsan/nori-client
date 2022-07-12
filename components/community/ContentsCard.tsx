import styled from '@emotion/styled';
import { IcComment, IcHeart } from '../../public/assets/icons';

interface ContentsInfo {
    id?:number,
    category?: string,
    title: string,
    content: string,
    userNickname: string,
    replyCount: string,
    createdAt: string,
    image?:string
}

export default function ContentCard(props: ContentsInfo) {
    const { id, category, title, content, userNickname, replyCount, createdAt, image } = props;
  return (
    <StContentsCardWrapper>
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
    </StContentsCardWrapper>
  );
}

const StContentsCardWrapper = styled.div`
  width: 120rem;
  height: auto;


  margin-bottom: 9.6rem;
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
