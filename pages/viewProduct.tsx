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
import { useRecoilState, useRecoilValue } from 'recoil';
import { FilterTagProps, ViewProductProps } from '../types/viewProduct';
import {
  checkedItemsState,
  filterCheckQuery,
  filterTagState,
} from '../core/atom';

// import { IcGrayEmpty } from '../public/assets/icons';

import {
  getBannerViewProduct,
  getViewProductFilter,
  getViewProduct,
  getBannerViewProductFilter,
} from '../core/api/viewProduct';

import { LandingPageNavigation } from '../components/landing/collectionProduct.tsx';
import { divisionToyData } from '../utils/check';
import { IcGrayEmpty } from '../public/assets/icons';
import { useRouter } from 'next/router';

const limit = 40;

export default function viewProduct({
  filterData,
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(result);
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  // console.log('체크', Object.keys(checkedItems));
  // console.log('결과조회', filterData);
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);

  // let { toyFilterList } =
  //   router.query.iconId && Number(router.query.iconId) !== 0
  //     ? getBannerViewProductFilter(
  //         Number(router.query.iconId),
  //         `search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
  //       )
  //     : getViewProductFilter(
  //         `search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
  //       );

  useEffect(() => {
    if (result) {
      filterData = result.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );

      setToyList(divisionToyData(filterData));

      window.scrollTo(0, 0);
      console.log('초기렌더링');
    }
  }, [result, currentPage]);

  console.log(toyList);

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
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  if (context.query.filter === 'true') {
    const { search, type, month, priceCd, playHowCd, toySiteCd } =
      context.query as ViewProductProps;

    if (context.query.categoryId && Number(context.query.categoryId) !== 0) {
      const res = await getBannerViewProductFilter(
        Number(context.query.categoryId),
        {
          search,
          type,
          month,
          priceCd,
          playHowCd,
          toySiteCd,
        },
      );
      console.log('ssr1');
      return {
        props: {
          filterData: res.data.data.filterData,
          result: res.data.data.result,
        },
      };
    } else {
      const res = await getViewProductFilter({
        search,
        type,
        month,
        priceCd,
        playHowCd,
        toySiteCd,
      });
      console.log('ssr2');
      return {
        props: {
          filterData: res.data.data.filterData,
          result: res.data.data.result,
        },
      };
    }
  }
  if (context.query.iconId && Number(context.query.iconId) !== 0) {
    const res = await getBannerViewProduct(Number(context.query.iconId));
    console.log('ssr3');
    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  } else {
    const res = await getViewProduct();
    console.log('ssr4');
    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  }
};
