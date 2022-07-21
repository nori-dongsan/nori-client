import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LanddingMainBanner() {
  return <StLandingWrapper></StLandingWrapper>;
}
const StLandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 38.9rem;

  background: ${({ theme }) => theme.colors.gray002};
  animation: ${loading} 2s infinite linear;
`;
