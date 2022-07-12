import styled from '@emotion/styled';

export default function Comment() {
  return (
    <StCommentWrapper>
      <StCommentTitle>댓글</StCommentTitle>
      <StInputForm>

      </StInputForm>
    </StCommentWrapper>
  );
}

const StCommentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 120rem;
`;
const StCommentTitle = styled.h1`
  margin-bottom: 2.87rem;

  font-style: normal;
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 4rem;
`;
const StInputForm = styled.div`
    width: 120rem;
    height: auto;
    min-height: 13.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray005};
    border-radius: 1rem;
`;
