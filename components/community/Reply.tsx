import styled from '@emotion/styled';
import ReplyContent from './ReplyContent';
import { ReplyData } from '../../types/community';

interface ReplyProps {
  replyList: ReplyData[];
}

export default function Reply(props: ReplyProps) {
  const { replyList } = props;

  return (
    <StReplyWrapper>
      {replyList.map((reply) => (
        <ReplyContent
          userNickname={reply.userNickname}
          createdAt={reply.createdAt}
          content={reply.content}
        />
      ))}
    </StReplyWrapper>
  );
}

const StReplyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
