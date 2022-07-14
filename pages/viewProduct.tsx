import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { ToyList } from '../components/common';

export default function viewProduct() {
  return (
    <StWrapper>
      <ViewProductBanner />

      <StViewProductWrapper>
        <StFilterWrapper>
          <ProductFilter />
        </StFilterWrapper>
        <StToyListWrapper>
          {/* <ToyList landingCategory="viewProduct" length={4} /> */}
        </StToyListWrapper>
      </StViewProductWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0rem 37.2rem;
`;
const StViewProductWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;
const StFilterWrapper = styled.nav`
  display: flex;
  flex: 0.5;
`;
const StToyListWrapper = styled.article`
  display: flex;
  flex: 2.5;
`;
