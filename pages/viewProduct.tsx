import { ProductFilter, ViewProductBanner } from '../components/viewProduct';
import styled from '@emotion/styled';
import { IcPriceLine, IcTopBtn, IcWriteBtn } from '../public/assets/icons';
import { useState } from 'react';
import { ToyList } from '../components/viewProduct';
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
  const handlePriceSort = (idx: number) => {
    //이미 해당 버튼이 눌려져있다면 return
    if (selectPrice[idx]) return;
    setSelectPrice({
      ...selectPrice,
      [0]: !selectPrice[0],
      [1]: !selectPrice[1],
    });
  };
  const handleTopScroll = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
            <StContentSection>
              <StFilterBarWrapper>
                <StPriceSort>
                  <StPriceStandard
                    onClick={() => handlePriceSort(0)}
                    isClicked={selectPrice[0]}
                  >
                    낮은 가격순
                  </StPriceStandard>
                  <IcPriceLine />
                  <StPriceStandard
                    onClick={() => handlePriceSort(1)}
                    isClicked={selectPrice[1]}
                  >
                    높은 가격순
                  </StPriceStandard>
                </StPriceSort>
              </StFilterBarWrapper>
              <StToyListWrapper>
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
                <ToyList length={4} landingCategory={'vieProduct'} />
              </StToyListWrapper>
            </StContentSection>
            <StTopBtn onClick={handleTopScroll} />
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
const StFilterSectionWrapper = styled.section`
  display: flex;

  height: fit-content;
`;
const StFilterBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StPriceSort = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;

  height: 2rem;
  margin-top: 2rem;

  ${({ theme }) => theme.fonts.b5_14_medium_140};

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
const StTopBtn = styled(IcTopBtn)`
  position: absolute;

  cursor: pointer;
`;
