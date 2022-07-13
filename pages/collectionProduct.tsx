import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { PriceFilter } from '../components/collectionProduct';
import PageNavigation from '../components/collectionProduct/PageNavigation';
import { ToyList } from '../components/common';
import { useState } from 'react';

const limit = 40;
const totalCount = 361;

export default function collectionProduct() {
  const { query } = useRouter();
  const { collection } = query;
  const toyList = new Array(10).fill(0);
  const [currentPage, setCurrentPage] = useState<number>(7);

  const handleCurrentPage = (nextPage: number) => {
    setCurrentPage(nextPage);
  };
  return (
    <StCollectionSection>
      <StCollectionTitle>{collection}</StCollectionTitle>
      <PriceFilter />
      <StToyListWrapper>
        {toyList.map((_, idx) => (
          <ToyList key={idx} landingCategory="noriPick" length={4} />
        ))}
      </StToyListWrapper>
      <PageNavigation
        currentPage={currentPage}
        lastPage={Math.ceil(totalCount / limit) + 1}
        handleCurrentPage={handleCurrentPage}
      />
    </StCollectionSection>
  );
}

const StCollectionSection = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const StCollectionTitle = styled.text`
  margin: 7.1rem 0rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150}
`;
const StToyListWrapper = styled.div`
  margin: 0rem 37.2rem;
`;
