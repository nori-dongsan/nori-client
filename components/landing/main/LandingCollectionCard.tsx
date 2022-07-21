import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';
import LandingConceptTitle from './LandingConceptTitle';

export default function LandingCollectionCard() {
  return (
    <StLandingWrapper>
      <LandingConceptTitle />
      <section>
        <article />
        <article />
        <article />
      </section>
    </StLandingWrapper>
  );
}

const StLandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 47.9rem;
  margin-top: 7.8rem;

  background: ${({ theme }) => theme.colors.gray002};
  animation: ${loading} 2s infinite linear;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  article {
    width: 37.2rem;
    height: 26.5rem;
    margin: 0 1.5rem;
    background: ${({ theme }) => theme.colors.gray003};
    border-radius: 1.2rem;
  }
`;
