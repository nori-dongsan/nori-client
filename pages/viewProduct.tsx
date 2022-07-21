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
import { toyMockData } from '../mocks/data/toyMockData';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRecoilValue } from 'recoil';
import { FilterTagProps } from '../types/viewProduct';
import { filterTagState } from '../core/atom';
import { IcGrayEmpty } from '../public/assets/icons';

const limit = 40;

export default function viewProduct({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(data);
  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  const [selectPrice, setSelectPrice] = useState<boolean[]>([true, false]);
  // useSWR로 로딩 판단할 것임
  const isLoading = false;
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);

  // let { productList, isLoading, isError } = priceDesc
  //   ? (useGetCollectionProduct('price-desc') as GetCollectionProduct)
  //   : (useGetCollectionProduct('price-asc') as GetCollectionProduct);

  useEffect(() => {
    if (data) {
      const filterData = data.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );
      setToyList(filterData);
      window.scrollTo(0, 0);
    }
  }, [data, currentPage]);

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
            lastPage={Math.ceil(data.length / limit)}
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
  const data: ToyData[] = toyMockData;
  return {
    props: {
      data,
    },
  };
};
