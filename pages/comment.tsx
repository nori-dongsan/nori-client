import styled from '@emotion/styled';

export default function Comment() {
  return (
    <StCommentWrapper>
      <StCommentTitle>댓글</StCommentTitle>
      <StInputForm>
        <StInputContent>
          <p>예현맘</p>
          <input type="text" placeholder="댓글을 남겨보세요" />
        </StInputContent>

        <StInputBtn>등록</StInputBtn>
      </StInputForm>
    </StCommentWrapper>
  );
}

const StCommentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StCommentTitle = styled.h1`
  margin-bottom: 2.87rem;

  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 4rem;
`;
const StInputForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 4.3rem;
  padding-right: 3.16rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
  border-radius: 1rem;
`;

const StInputContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 120rem;
  height: auto;
  min-height: 13.6rem;

  p {
    margin-bottom: 0.3rem;

    font-style: normal;
    font-weight: 500;
    font-size: 2.3rem;
  }

  input {
    width: 80%;
    height: 3.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 2.1rem;
    line-height: 3.2rem;

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
`;
