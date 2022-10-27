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
import { useSWRConfig } from 'swr';

const limit = 40;

export default function viewProduct({
  filterData,
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(result);
  const router = useRouter();

  // console.log(`데이터터${JSON.stringify(data?.data.toyFilterList)}`);
  console.log(`라우터쿼리${JSON.stringify(router.query)}`);
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[][]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);
  let res =
    router.query.categoryId && Number(router.query.categoryId) !== 0
      ? getBannerViewProductFilter(
          Number(router.query.categoryId),
          router.query,
        ).data?.data.result
      : getViewProductFilter(router.query).data?.data.result;
  // const { mutate } = useSWRConfig();
  // mutate();
  console.log(`result는${JSON.stringify(res)}`);
  useEffect(() => {
    if (result && !res) {
      filterData = result.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );

      setToyList(divisionToyData(filterData));

      window.scrollTo(0, 0);
      console.log('초기렌더링');
    }
  }, [result, currentPage]);
  useEffect(() => {
    if (router.query.filter === 'true' && res) {
      filterData = res.filter(
        (_: any, idx: number) =>
          (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );

      setToyList(divisionToyData(filterData));

      window.scrollTo(0, 0);
      console.log('swr');
    }
  }, [res]);
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
  if (context.query.iconId && Number(context.query.iconId) !== 0) {
    const res = await getBannerViewProduct(Number(context.query.iconId));
    console.log(res.data.data.result);
    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  } else {
    const res = await getViewProduct();

    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  }
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   if (context.query.filter === 'true') {
//     const { search, type, month, priceCd, playHowCd, toySiteCd } =
//       context.query as ViewProductProps;

//     if (context.query.categoryId && Number(context.query.categoryId) !== 0) {
//       const res = await getBannerViewProductFilter(
//         Number(context.query.categoryId),
//         {
//           search,
//           type,
//           month,
//           priceCd,
//           playHowCd,
//           toySiteCd,
//         },
//       );
//       console.log(res.data);
//       return {
//         props: {
//           filterData: res.data.data.filterData,
//           result: res.data.data.result,
//         },
//       };
//     } else {
//       const res = await getViewProductFilter({
//         search,
//         type,
//         month,
//         priceCd,
//         playHowCd,
//         toySiteCd,
//       });
//       console.log(res);
//       return {
//         props: {
//           filterData: res.data.data.filterData,
//           result: res.data.data.result,
//         },
//       };
//     }
//   }
//   if (context.query.iconId && Number(context.query.iconId) !== 0) {
//     const res = await getBannerViewProduct(Number(context.query.iconId));
//     console.log(res.data.data.result);
//     return {
//       props: {
//         filterData: res.data.data.filterData,
//         result: res.data.data.result,
//       },
//     };
//   } else {
//     const res = await getViewProduct();

//     return {
//       props: {
//         filterData: res.data.data.filterData,
//         result: res.data.data.result,
//       },
//     };
//   }
// };
