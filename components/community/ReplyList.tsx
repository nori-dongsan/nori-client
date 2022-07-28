import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { postReply } from '../../core/api/community';
import { PostCommentBody, ReplyData } from '../../types/community';
import ReplyContent from './ReplyContent';
import { useRouter } from 'next/router';
import { PageNavigation } from '../common/index';

interface ReplyListProps {
  cid: string;
  replyList: ReplyData[];
}

export default function ReplyList(props: ReplyListProps) {
  const router = useRouter();
  const { replyList, cid } = props;
  const [replyState, setReplyState] = useState<ReplyData[]>(replyList);
  const [inputColor, setInputColor] = useState<boolean>(false);
  const [replyText, setReplyText] = useState<string>('');
  const [newReplyInfo, setNewReplyInfo] = useState<PostCommentBody>({
    boardId: '',
    content: '',
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageReplyList, setPageReplyList] = useState<ReplyData[]>([]);

  const handleInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReplyInfo({ boardId: cid, content: e.target.value });
  };

  const handleInputColor = (e: any) => {
    setInputColor(e.target.value.length !== 0);
  };

  const handleReplyregister = async () => {
    const { content } = newReplyInfo;
    if (content === '') {
      alert('내용을 입력해주세요.');
      return;
    }

    const status = await postReply(newReplyInfo);
    setNewReplyInfo({
      boardId: cid,
      content: replyText,
    });
    if (status === 200) router.push(`/community/${cid}`);
    setNewReplyInfo({ boardId: cid, content: '' });
  };
  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    if (replyList) {
      const tempList = replyList.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 10 <= idx && idx < currentPage * 10,
      );

      setPageReplyList(tempList);
      window.scrollTo({ top: 750 });
    }
  }, [replyList, currentPage, newReplyInfo]);
  return (
    <>
      <StReplyTitle>
        <h1>댓글</h1>
        <p>{replyList.length}</p>
      </StReplyTitle>
      <StInputForm>
        <StInputContent inputColor={inputColor}>
          <input
            type="text"
            placeholder="댓글을 남겨 보세요"
            onKeyUp={handleInputColor}
            onChange={handleInputText}
          />
        </StInputContent>
        <StInputBtn inputColor={inputColor} onClick={handleReplyregister}>
          입력
        </StInputBtn>
      </StInputForm>
      <StReplyWrapper>
        {pageReplyList.map(
          ({ author, userNickname, content, createAt }, idx) => (
            <ReplyContent
              key={idx}
              author={author}
              userNickname={userNickname}
              content={content}
              createAt={createAt}
            />
          ),
        )}
      </StReplyWrapper>
      <StReplyListNav>
        {pageReplyList && (
          <PageNavigation
            currentPage={currentPage}
            lastPage={Math.ceil(replyList.length / 10)}
            handleCurrentPage={handleCurrentPage}
          />
        )}
      </StReplyListNav>
    </>
  );
}

const StReplyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StReplyListNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StReplyTitle = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-bottom: 2.3rem;

  ${({ theme }) => theme.fonts.t3_19_medium_130}

  h1 {
    margin-right: 0.4rem;

    color: ${({ theme }) => theme.colors.black};
  }

  p {
    color: ${({ theme }) => theme.colors.mainDarkgreen};
  }
`;
const StInputForm = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 4.8rem;

  width: 77.6rem;
`;
const StInputContent = styled.div<{ inputColor: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-right: 2.4rem;
    padding-left: 1.8rem;

    width: 67.6rem;
    height: 4.2rem;

    color: ${({ theme }) => theme.colors.black};

    ${({ theme }) => theme.fonts.b4_15_regular_146};

    border: 0.1rem solid
      ${({ theme, inputColor }) =>
        !inputColor ? theme.colors.gray007 : theme.colors.mainDarkgreen};
    border-radius: 0.65rem;

    &::placeholder {
      font-family: Pretendard;

      color: ${({ theme }) => theme.colors.gray005};
    }
  }
`;
const StInputBtn = styled.span<{ inputColor: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.6rem;
  height: 4.2rem;

  background-color: ${({ theme, inputColor }) =>
    !inputColor ? theme.colors.gray003 : theme.colors.mainDarkgreen};
  color: ${({ theme, inputColor }) =>
    !inputColor ? theme.colors.gray006 : theme.colors.white};
  ${({ theme }) => theme.fonts.b2_18_medium_130};

  border-radius: 0.5rem;

  cursor: pointer;
`;
