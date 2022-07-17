import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';

export default function LandingTitle() {
  return <StLandingh1></StLandingh1>;
}

const StLandingh1 = styled.h1`
  width: 9.7rem;
  height: 4.2rem;
  margin-top: 7.3rem;
  margin-bottom: 1.8rem;

  background: ${({ theme }) => theme.colors.gray003};

  animation: ${loading} 2s infinite linear;
`;
