import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  PriceFilter,
  PageNavigation,
  CollectionList,
} from '../components/collectionProduct';
import { useEffect, useState } from 'react';
import { useGetCollectionProduct } from '../core/api/toy';
import { GetCollectionProduct, ToyData } from '../types/toy';
import {
  LandingCollectionList,
  LandingCollectionTitle,
  LandingPageNavigation,
  LandingPriceSort,
} from '../components/landing/collectionProduct.tsx';
import { NextPageContext } from 'next';

const limit = 40;

export default function collectionProduct({}) {
  const { query } = useRouter();
  const { collection } = query;
  const [toyList, setToyList] = useState<ToyData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const landingArray = new Array(10).fill(0);
  const [priceDesc, setPriceDesc] = useState<boolean>(true);

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  const handleClickPrice = (clickPrice: string) => {
    clickPrice === 'price-desc' ? setPriceDesc(true) : setPriceDesc(false);
  };
  let { productList, isLoading, isError } = priceDesc
    ? (useGetCollectionProduct('price-desc') as GetCollectionProduct)
    : (useGetCollectionProduct('price-asc') as GetCollectionProduct);

  useEffect(() => {
    if (productList) {
      let data = productList.data.data as ToyData[];
      data = data.filter(
        (_, idx) => (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );
      setToyList(data);
      window.scrollTo(0, 0);
    }
  }, [productList, currentPage]);
  return (
    <StCollectionSection>
      {isLoading ? (
        <>
          <LandingCollectionTitle />
          <LandingPriceSort />
          <StToyListWrapper>
            {landingArray.map((_, idx) => (
              <LandingCollectionList key={idx} />
            ))}
          </StToyListWrapper>
          <LandingPageNavigation />
        </>
      ) : (
        <>
          <StCollectionTitle>{collection}</StCollectionTitle>
          <PriceFilter
            priceDesc={priceDesc}
            handleClickPrice={handleClickPrice}
          />
          <StToyListWrapper>
            {toyList.map(
              (_, idx) =>
                (idx + 1) % 4 === 0 && (
                  <CollectionList
                    key={idx}
                    toyList={toyList.slice(idx - 3, idx + 1)}
                  />
                ),
            )}
          </StToyListWrapper>
          {!isLoading && !isError && productList && (
            <PageNavigation
              currentPage={currentPage}
              lastPage={Math.ceil(productList.data.data.length / limit)}
              handleCurrentPage={handleCurrentPage}
            />
          )}
        </>
      )}
    </StCollectionSection>
  );
}

const StCollectionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StCollectionTitle = styled.h4`
  margin: 7.1rem 0rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150}
`;
const StToyListWrapper = styled.section`
  margin: 0rem 37.2rem;
`;
// export async function getStaticProps(context: NextPageContext) {
//   const res = await getCollectionProduct(`1`);
//   const initialData = res.data;
//   console.log(initialData);

//   return {
//     props: {
//       initialData,
//     },
//   };
// }
