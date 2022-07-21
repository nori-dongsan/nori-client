import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingMiddleBanner() {
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

  height: 15.8rem;
  margin-top: 10rem;

  div {
    width: 117.6rem;
    height: 15.8rem;

    background: ${({ theme }) => theme.colors.gray002};
    animation: ${loading} 2s infinite linear;
  }
`;
