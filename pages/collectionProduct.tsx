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

const limit = 40;

export default function collectionProduct() {
  const { query } = useRouter();
  const { collection } = query;
  const [toyList, setToyList] = useState<ToyData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const landingArray = new Array(10).fill(0);
  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  let { productList, isLoading, isError } = useGetCollectionProduct(
    'price-desc',
  ) as GetCollectionProduct;

  useEffect(() => {
    if (productList) {
      let data = productList as ToyData[];
      data = data.filter(
        (_, idx) => (currentPage - 1) * 40 <= idx && idx < currentPage * 40,
      );
      setToyList(data);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [productList, currentPage]);
  isLoading = true;
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
          <PriceFilter />
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
          {!isLoading && !isError && (
            <PageNavigation
              currentPage={currentPage}
              lastPage={Math.ceil(productList.length / limit)}
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
const StCollectionTitle = styled.text`
  margin: 7.1rem 0rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150}
`;
const StToyListWrapper = styled.div`
  margin: 0rem 37.2rem;
`;
