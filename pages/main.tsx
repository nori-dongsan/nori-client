import { MainBanner } from '../components/main';
import styled from '@emotion/styled';
import { ToyList } from '../components/common';
import { useRouter } from 'next/router';

export default function main() {
  const { query } = useRouter();

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

  ${({ theme }) => theme.fonts.t2_26_semibold_150};
`;
