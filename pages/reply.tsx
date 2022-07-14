import styled from '@emotion/styled';
import ReplyContent from '../components/community/comment/ReplyContent';

export default function Comment() {
  return (
    <StReplyWrapper>
      <StReplyTitle>
        <p>댓글</p>
      </StReplyTitle>
      <StInputForm>
        <StInputContent>
          <p>예현맘</p>
          <input type="text" placeholder="댓글을 남겨보세요" />
        </StInputContent>
        <StInputBtn>등록</StInputBtn>
      </StInputForm>
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
      <ReplyContent
        userNickname="희지맘"
        createdAt="2022.07.13"
        content="저희는 4개월 때부터 학습용 완구 썼어요!"
      />
    </StReplyWrapper>
  );
}

const StReplyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StReplyTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  margin-bottom: 2.87rem;

  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 4rem;
`;
const StInputForm = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 6.9rem;
  padding-left: 4.3rem;
  padding-right: 3.2rem;

  width: 120rem;
  height: auto;
  min-height: 13.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 1rem;
`;
const StInputContent = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 0.3rem;

    font-style: normal;
    font-weight: 500;
    font-size: 23.2351px;
    line-height: 34px;
  }

  input {
    font-style: normal;
    font-weight: 400;
    font-size: 21.3762px;
    line-height: 31px;

    &::placeholder {
      font-family: Pretendard;
    }
  }
`;
const StInputBtn = styled.span`
  padding: 0.5rem 2.8rem;

  font-style: normal;
  font-weight: 400;
  font-size: 23.2351px;
  line-height: 32px;

  color: ${({ theme }) => theme.colors.mainDarkgreen};
  background-color: ${({ theme }) => theme.colors.lightGreen};
  border: 2px solid ${({ theme }) => theme.colors.mainDarkgreen};
  border-radius: 1rem;

  cursor: pointer;
`;
