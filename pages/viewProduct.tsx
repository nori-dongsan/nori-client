import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine } from '../public/assets/icons';

export default function viewProduct() {
  return (
    <StViewProductWrapper>
      <ViewProductBanner />
      <StFilterBarWrapper>
        <ProductFilter />
        <StPriceSort>
          <h3>낮은 가격순</h3>
          <IcPriceLine />
          <h3>높은 가격순</h3>
        </StPriceSort>
      </StFilterBarWrapper>
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  width: 192rem;
  padding: 0 37.2rem;
`;
const StPriceSort = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  margin-top: 2rem;

  font: ${({ theme }) => theme.fonts.b5_14_medium_140};

  cursor: pointer;
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
