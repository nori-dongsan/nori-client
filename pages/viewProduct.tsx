import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine } from '../public/assets/icons';
import { useState } from 'react';

import { ToyList } from '../components/common';
import {
  LandingViewProductBanner,
  LandingToyList,
  LandingPriceSort,
  LandingProductFilter,
} from '../components/landing/viewProduct';

export default function viewProduct() {
  //default는 낮은 가격순
  const [selectPrice, setSelectPrice] = useState<boolean[]>([true, false]);
  // useSWR로 로딩 판단할 것임
  const isLoading = false;

  return (
    <StViewProductWrapper>
      {isLoading ? (
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

            {/* <<<<<<< HEAD
        <ProductFilter />
        <StPriceSort>
          <StPriceStandard
            onClick={() => {
              setSelectPrice({
                ...selectPrice,
                [0]: !selectPrice[0],
              });
            }}
            isClicked={selectPrice[0]}
          >
            낮은 가격순
          </StPriceStandard>
          <IcPriceLine />
          <StPriceStandard
            onClick={() => {
              setSelectPrice({
                ...selectPrice,
                [1]: !selectPrice[1],
              });
            }}
            isClicked={selectPrice[1]}
          >
            높은 가격순
          </StPriceStandard>
        </StPriceSort>

      </StFilterBarWrapper> */}

            <StContentSection>
              <StFilterBarWrapper>
                <StPriceSort>
                  <h3>낮은 가격순</h3>
                  <IcPriceLine />
                  <h3>높은 가격순</h3>
                </StPriceSort>
              </StFilterBarWrapper>
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
            </StContentSection>
          </StFilterSectionWrapper>
        </>
      )}
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 37.2rem;
`;

/*
const StViewProductWrapper = styled.div`
  width: 192rem;
  padding: 0 37.2rem;
`;
*/

const StFilterSectionWrapper = styled.section`
  display: flex;
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StPriceSort = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  margin-top: 2rem;

  font: ${({ theme }) => theme.fonts.b5_14_medium_140};

  cursor: pointer;
`;


const StPriceStandard = styled.h3<{ isClicked: boolean }>`
  color: ${({ isClicked, theme: { colors } }) =>
    isClicked ? colors.black : colors.gray005};
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
const StSelectBar = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
