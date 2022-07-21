import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingFooter() {
  return (
    <StLandingWrapper>
      <span></span>
    </StLandingWrapper>
  );
}
const StLandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;

  width: 100%;
  height: 24.9rem;

  background: ${({ theme }) => theme.colors.gray001};
  /* animation: ${loading} 2s infinite linear; */

  z-index: 4;

  span {
    width: 117.6rem;
    top: 18.4rem;
    left: 37.2rem;
  }
`;
