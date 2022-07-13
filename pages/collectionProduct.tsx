import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { PriceFilter } from '../components/collectionProduct';
export default function collectionProduct() {
  const { query } = useRouter();
  const { collection } = query;

  console.log(collection);
  return (
    <StCollectionSection>
      <StCollectionTitle>{collection}</StCollectionTitle>
      <PriceFilter />
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
