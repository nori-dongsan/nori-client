import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';
export default function LandingConceptTitle() {
  return (
    <StLandingWrapper>
      <div></div>
    </StLandingWrapper>
  );
}

const StLandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 20.8rem;
    height: 4rem;
    margin-bottom: 4.3rem;

    border-radius: 0.3rem;
    background: ${({ theme }) => theme.colors.gray003};
    animation: ${loading} 2s infinite linear;
  }
`;
