import { MainBanner } from '../components/main';
import styled from '@emotion/styled';
import { ToyList } from '../components/common';

export default function main() {
  return (
    <>
      <MainBanner />
      <StMainSection>
        <StConceptArticle>
          <StConceptTitle>이번주 인기 장난감</StConceptTitle>
          <ToyList />
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
  padding: 7rem 37rem;
`;
const StConceptTitle = styled.div`
  padding-bottom: 5rem;

  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
`;
