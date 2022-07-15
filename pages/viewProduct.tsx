import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine } from '../public/assets/icons';
import { ToyList } from '../components/common';

export default function viewProduct() {
  return (
    <StViewProductWrapper>
      <ViewProductBanner />
      <StFilterBarWrapper>
        <StPriceSort>
          <h3>낮은 가격순</h3>
          <IcPriceLine />
          <h3>높은 가격순</h3>
        </StPriceSort>
      </StFilterBarWrapper>
      <StSection>
        <ProductFilter />
        <StToyListWrapper>
          <ToyList
            isViewProduct={true}
            landingCategory="viewProduct"
            length={4}
          />
          <ToyList
            isViewProduct={true}
            landingCategory="viewProduct"
            length={4}
          />
          <ToyList
            isViewProduct={true}
            landingCategory="viewProduct"
            length={4}
          />
          <ToyList
            isViewProduct={true}
            landingCategory="viewProduct"
            length={4}
          />
        </StToyListWrapper>
      </StSection>
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 37.2rem;
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StPriceSort = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  margin-top: 2rem;

  font: ${({ theme }) => theme.fonts.b5_14_medium_140};

  cursor: pointer;
`;

const StSection = styled.section`
  display: flex;
`;
const StToyListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;
`;
