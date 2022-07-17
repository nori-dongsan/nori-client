import styled from '@emotion/styled';
import { loading } from '../../common/styled/animation';
export default function LandingCollectionTitle() {
  return <StLandingCollectionTitle></StLandingCollectionTitle>;
}
const StLandingCollectionTitle = styled.text`
  width: 20.8rem;
  height: 4.2rem;
  margin-top: 7.3rem;

  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.gray003};

  animation: ${loading} 2s infinite linear;
`;
