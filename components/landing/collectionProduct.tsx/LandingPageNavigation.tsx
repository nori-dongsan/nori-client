import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingPageNavigation() {
  return <StLandingPageNavigation></StLandingPageNavigation>;
}

const StLandingPageNavigation = styled.text`
  width: 26.1rem;
  height: 3.2rem;
  margin-bottom: 12rem;

  background: ${({ theme }) => theme.colors.gray002};

  animation: ${loading} 2s infinite linear;
`;
