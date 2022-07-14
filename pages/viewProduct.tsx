import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine } from '../public/assets/icons';
import { useState } from 'react';
import { ToyList } from '../components/common';

export default function viewProduct() {
  //default는 낮은 가격순
  const [selectPrice, setSelectPrice] = useState<boolean[]>([true, false]);

  return (
    <StViewProductWrapper>
      <ViewProductBanner />
      <StFilterBarWrapper>
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
/*
const StViewProductWrapper = styled.div`
  width: 192rem;
  padding: 0 37.2rem;
`;
*/
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

const StPriceStandard = styled.h3<{ isClicked: boolean }>`
  color: ${({ isClicked }) => (isClicked ? '#1F2220' : '#D9D9D9')};
`;

const StSection = styled.section`
  display: flex;
`;
const StToyListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;
`;
