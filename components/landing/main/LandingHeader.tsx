import styled from '@emotion/styled';

export default function LandingHeader() {
  return <StLandingWrapper></StLandingWrapper>;
}
const StLandingWrapper = styled.div`
  position: sticky;

  position: absolute;
  top: 0;

  width: 100%;
  height: 11.4rem;

  background: ${({ theme }) => theme.colors.white};

  z-index: 4;
`;
