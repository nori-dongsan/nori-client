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
import {
  FilterTagProps,
  ViewProductProps,
  ViewProductServerSide,
} from '../types/viewProduct';
import {
  checkedItemsState,
  filterCheckQuery,
  filterTagState,
} from '../core/atom';
import { IcGrayEmpty } from '../public/assets/icons';
import {
  getBannerViewProduct,
  getViewProductFilter,
  getViewProduct,
  getBannerViewProductFilter,
} from '../core/api/viewProduct';
import { Router, useRouter } from 'next/router';
import { GetViewProduct } from '../types/viewProduct';
const limit = 40;

export default function viewProduct({
  filterData,
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  console.log(result);
  const [priceDesc, setPriceDesc] = useState<boolean>(true);
  const [toyList, setToyList] = useState<ToyData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [initial, setInitial] = useState<boolean>(true);
  const filterQuery = useRecoilValue<ViewProductProps>(filterCheckQuery);
  const [checkedItems, setCheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);

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
      console.log('여기', filterData);
      setToyList(filterData);
      window.scrollTo(0, 0);
      setInitial(false);
      console.log('초기렌더링');
    }
  }, [result, currentPage]);
  // useEffect(() => {
  //   if (toyFilterList && !initial) {
  //     // const filterData = toyFilterList.data.filter(
  //     //   (_: any, idx: number) =>
  //     //     (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
  //     // );
  //     // setToyList(filterData);
  //     // window.scrollTo(0, 0);
  //     console.log(
  //       '이것은?',
  //       Boolean(router.query.iconId && Number(router.query.iconId) !== 0),
  //     );
  //     console.log('토이리스트', toyFilterList.data.data.result);
  //   }
  // }, [toyFilterList]);
  console.log('목록', toyList);
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
  // useGetBa

  console.log(context.query);
  if (context.query.filter === 'true') {
    const { search, type, month, priceCd, playHowCd, toySiteCd } =
      context.query as ViewProductProps;
    const res = await getViewProductFilter({
      search,
      type,
      month,
      priceCd,
      playHowCd,
      toySiteCd,
    });
    console.log(res);
    return {
      props: {
        filterData: res.data.data.filterData,
        result: res.data.data.result,
      },
    };
  }
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
