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
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  FilterData,
  FilterTagProps,
  ViewProductProps,
} from '../types/viewProduct';
import { filterTagState, toyKindState } from '../core/atom';

// import { IcGrayEmpty } from '../public/assets/icons';

import {
  getBannerViewProduct,
  getViewProductFilter,
  getViewProduct,
  getBannerViewProductFilter,
} from '../core/api/viewProduct';

import { LandingPageNavigation } from '../components/landing/collectionProduct.tsx';
import { chQuery, divisionToyData } from '../utils/check';
import { IcGrayEmpty } from '../public/assets/icons';
import { useRouter } from 'next/router';

const limit = 40;
export default function viewProduct({
  initialFilterData,
  initialResult,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // export default function viewProduct() {
  const router = useRouter();
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setToyKindArr = useSetRecoilState<string[]>(toyKindState);
  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };
  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);
  let { result, filterData } = (
    router.query.categoryId && Number(router.query.categoryId) !== 0
      ? getBannerViewProductFilter(
          Number(router.query.categoryId),
          chQuery(router.query),
        )
      : getViewProductFilter(chQuery(router.query))
  ) as { result: ToyData[]; filterData: FilterData };
  useEffect(() => {
    if (router.query.filter !== 'true' && initialFilterData) {
      result = initialResult.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );

      setToyList(divisionToyData(result));
      initialFilterData.type && setToyKindArr(initialFilterData.type);
      window.scrollTo(0, 0);
      console.log('초기렌더링');
    }
  }, [initialResult, currentPage]);
  useEffect(() => {
    if (router.query.filter === 'true' && result) {
      result = result.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );

      setToyList(divisionToyData(result));
      filterData.type && setToyKindArr(filterData.type);
      window.scrollTo(0, 0);
      console.log('swr렌더링');
    }
  }, [result, currentPage]);

  return (
    <StViewProductWrapper>
      {!ToyList ? (
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
          <LandingPageNavigation />
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
                  {toyList.map((data, idx) => (
                    <ToyList key={idx} toyList={data} />
                  ))}
                </StToyListWrapper>
              )}
            </StContentSection>
          </StFilterSectionWrapper>
          <PageNavigation
            currentPage={currentPage}
            lastPage={
              result
                ? Math.ceil(result.length / limit)
                : Math.ceil(initialResult.length / limit)
            }
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
  const { categoryId } = context.query as ViewProductProps;

  if (categoryId && Number(categoryId) !== 0) {
    const res = await getBannerViewProduct(Number(categoryId));
    return {
      props: {
        initialFilterData: res.data.data.filterData,
        initialResult: res.data.data.result,
      },
    };
  } else {
    const res = await getViewProduct();
    return {
      props: {
        initialFilterData: res.data.data.filterData,
        initialResult: res.data.data.result,
      },
    };
  }
};
