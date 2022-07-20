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
  justify-content: flex-end;
  align-items: center;

  width: 117.5rem;
  height: 2rem;
  margin: 5.4rem 0 2rem 0;

  gap: 1.4rem;

  & > h3.price {
    width: 6.4rem;
    height: 2rem;

    background: ${({ theme }) => theme.colors.gray002};

    animation: ${loading} 2s infinite linear;
  }

  cursor: pointer;
`;
