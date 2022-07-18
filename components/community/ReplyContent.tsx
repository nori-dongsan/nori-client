import styled from '@emotion/styled';

interface ReplyContentProps {
  userNickname: string;
  content: string;
  createdAt: string;
}

export default function ReplyContent(props: ReplyContentProps) {
  const { userNickname, content, createdAt } = props;
  return (
    <StReplyContentWrapper>
      <StReplyInfo>
        <p>{userNickname}</p>
        <span>{createdAt}</span>
      </StReplyInfo>
      <StReplyContents>
        <p>{content}</p>
      </StReplyContents>
    </StReplyContentWrapper>
  );
}

const StReplyContentWrapper = styled.section`
  width: 77.6rem;
  margin-bottom: 3.3rem;

  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray005};
`;

const StReplyInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1.1rem;

  p {
    padding-right: 0.9rem;

    font-style: normal;
    font-weight: 500;
    font-size: 23.2351px;
    line-height: 34px;
  }

  span {
    font-style: normal;
    font-weight: 350;
    font-size: 19.5174px;
    line-height: 28px;
  }
`;

const StReplyContents = styled.div`
  margin-bottom: 2.8rem;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 21.3762px;
    line-height: 31px;
  }
`;
