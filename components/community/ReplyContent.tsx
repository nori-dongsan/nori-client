import styled from '@emotion/styled';
import { IcReplyWriteIcon } from '../../public/assets/icons';
import { useState } from 'react';

interface ReplyContentProps {
  author: boolean;
  userNickname?: string;
  content: string;
  createAt: string;
}

export default function ReplyContent(props: ReplyContentProps) {
  const { userNickname, content, createAt, author } = props;

  return (
    <StReplyContentWrapper>
      <StReplyInfo>
        <p>{userNickname}</p>
        {author && <IcReplyWriteIcon />}
      </StReplyInfo>
      <StReplyContents>
        <p>{content}</p>
        <span>
          {createAt.split('T')[0]} · {author ? '삭제' : '신고'}
        </span>
      </StReplyContents>
    </StReplyContentWrapper>
  );
}

const StReplyContentWrapper = styled.section`
  width: 77.6rem;
  margin-bottom: 4rem;
`;

const StReplyInfo = styled.div`
  display: flex;

  p {
    margin-bottom: 0.8rem;
    padding-right: 0.9rem;

    ${({ theme }) => theme.fonts.b3_16_semibold_140}
  }
`;

const StReplyContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin-bottom: 2.8rem;

  p {
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.colors.black};
    ${({ theme }) => theme.fonts.b4_15_regular_146}
  }

  span {
    color: ${({ theme }) => theme.colors.gray007};

    ${({ theme }) => theme.fonts.b6_13_regular_120}
  }
`;
