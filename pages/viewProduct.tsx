import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine } from '../public/assets/icons';
import { useState } from 'react';

export default function viewProduct() {
  //default는 낮은 가격순
  const [selectPrice, setSelectPrice] = useState<boolean[]>([true, false]);

  return (
    <StViewProductWrapper>
      <ViewProductBanner />
      <StFilterBarWrapper>
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
      </StFilterBarWrapper>
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  //width:100%로 하면 역시 망가져서 192rem으로 한 것
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
const StPriceStandard = styled.h3<{ isClicked: boolean }>`
  color: ${({ isClicked }) => (isClicked ? '#1F2220' : '#D9D9D9')};
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
