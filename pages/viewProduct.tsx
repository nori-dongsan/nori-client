import {
  ProductFilter,
  TopFloatingBtn,
  ViewProductBanner,
} from '../components/viewProduct';
import styled from '@emotion/styled';
import { useState } from 'react';
import { ToyList } from '../components/viewProduct';
import {
  LandingViewProductBanner,
  LandingToyList,
  LandingPriceSort,
  LandingProductFilter,
} from '../components/landing/viewProduct';
import { PriceFilter } from '../components/common';
import { ToyData } from '../types/toy';

export default function viewProduct() {
  //default는 낮은 가격순
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[]>([]);

  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };

  // let { productList, isLoading, isError } = priceDesc
  //   ? (useGetCollectionProduct('price-desc') as GetCollectionProduct)
  //   : (useGetCollectionProduct('price-asc') as GetCollectionProduct);

  return (
    <StViewProductWrapper>
      {false ? (
        <>
          <LandingViewProductBanner />
          <StFilterSectionWrapper>
            <LandingProductFilter />
            <StContentSection>
              <StFilterBarWrapper>
                <LandingPriceSort />
              </StFilterBarWrapper>
              <StToyListWrapper>
                <LandingToyList />
                <LandingToyList />
                <LandingToyList />
              </StToyListWrapper>
            </StContentSection>
          </StFilterSectionWrapper>
        </>
      ) : (
        <>
          <ViewProductBanner />
          <StFilterSectionWrapper>
            <ProductFilter />
            <StContentSection>
              <StFilterBarWrapper>
                <PriceFilter
                  priceDesc={priceDesc}
                  handleClickPrice={handleClickPrice}
                />
              </StFilterBarWrapper>
              <StToyListWrapper>
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
              </StToyListWrapper>
            </StContentSection>
          </StFilterSectionWrapper>
        </>
      )}
      <TopFloatingBtn />
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 37.2rem;
`;
const StFilterSectionWrapper = styled.section`
  display: flex;

  height: fit-content;
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StContentSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const StToyListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
`;
