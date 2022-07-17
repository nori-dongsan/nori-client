import styled from '@emotion/styled';
import { IcPriceLine } from '../../../public/assets/icons';
import { loading } from '../../common/styled/animation';

export default function LandingPriceSort() {
  return (
    <StLandingPriceSort>
      <h3 className="price"></h3>
      <IcPriceLine />
      <h3 className="price"></h3>
    </StLandingPriceSort>
  );
}

const StLandingPriceSort = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  margin: 2rem 0;

  & > h3.price {
    width: 64px;
    height: 20px;
    background: ${({ theme }) => theme.colors.gray002};
    animation: ${loading} 2s infinite linear;
  }
  cursor: pointer;
`;
