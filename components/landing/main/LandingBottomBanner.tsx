import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingBottomBanner() {
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

  width: 100%;
  height: 23.4rem;
  margin-top: 12rem;

  div {
    width: 100%;
    height: 23.4rem;

    background: ${({ theme }) => theme.colors.gray002};
    animation: ${loading} 2s infinite linear;
  }
`;
