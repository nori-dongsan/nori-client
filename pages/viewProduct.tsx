import {
  FilterTag,
  ProductFilter,
  TagSection,
  TopFloatingBtn,
  ToyList,
  ViewProductBanner,
} from '../components/viewProduct';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import {
  LandingViewProductBanner,
  LandingToyList,
  LandingPriceSort,
  LandingProductFilter,
} from '../components/landing/viewProduct';
import { PriceFilter, PageNavigation } from '../components/common';
import { ToyData } from '../types/toy';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRecoilValue } from 'recoil';
import { FilterTagProps } from '../types/viewProduct';
import { filterTagState } from '../core/atom';
import { IcGrayEmpty } from '../public/assets/icons';
import {
  getBannerViewProduct,
  getViewProduct,
  useGetBannerViewProduct,
} from '../core/api/viewProduct';

const limit = 40;

export default function viewProduct({
  filterData,
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(filterData, result);
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);

  // let { productList, isLoading, isError } = priceDesc
  //   ? (useGetCollectionProduct('price-desc') as GetCollectionProduct)
  //   : (useGetCollectionProduct('price-asc') as GetCollectionProduct);

  useEffect(() => {
    if (result) {
      const filterData = result.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );
      setToyList(filterData);
      window.scrollTo(0, 0);
    }
  }, [result, currentPage]);

  return (
    <StViewProductWrapper>
      {!filterData ? (
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
              {filterTagList.length !== 0 && <TagSection />}
              <StFilterBarWrapper>
                <PriceFilter
                  priceDesc={priceDesc}
                  handleClickPrice={handleClickPrice}
                />
              </StFilterBarWrapper>
              {toyList.length === 0 ? (
                <StEmptyView>
                  <IcGrayEmpty />
                </StEmptyView>
              ) : (
                <StToyListWrapper>
                  {toyList.map(
                    (_, idx) =>
                      (idx + 1) % 4 === 0 && (
                        <ToyList
                          key={idx}
                          toyList={toyList.slice(idx - 3, idx + 1)}
                        />
                      ),
                  )}
                </StToyListWrapper>
              )}
            </StContentSection>
          </StFilterSectionWrapper>
          <PageNavigation
            currentPage={currentPage}
            lastPage={Math.ceil(result.length / limit)}
            handleCurrentPage={handleCurrentPage}
          />
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
  height: auto;
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
const StEmptyView = styled.section`
  display: flex;
  justify-content: column;

  margin: 0 23.8rem;
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.query.iconId && Number(context.query.iconId) !== 0) {
    const res = await getBannerViewProduct(Number(context.query.iconId), 0);
    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  } else {
    const res = await getViewProduct(0);

    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  }
};
