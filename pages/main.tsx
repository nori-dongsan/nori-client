import styled from '@emotion/styled';

export default function main() {
  return (
    <>
      <StMainSection>
        <StConceptArticle>
          <StConceptTitle>이번주 인기 장난감</StConceptTitle>
        </StConceptArticle>
      </StMainSection>
    </>
  );
}

const StMainSection = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const StConceptArticle = styled.article`
  margin-top: 6.7rem;
`;
const StConceptTitle = styled.div`
  padding-bottom: 5rem;

  ${({ theme }) => theme.fonts.t2_26_semibold_150};
`;
