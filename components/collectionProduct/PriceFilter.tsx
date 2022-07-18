import styled from '@emotion/styled';

import {
  getCollectionProduct,
  useGetCollectionProduct,
} from '../../core/api/toy';

export default function PriceFilter() {
  const data = useGetCollectionProduct('price-desc');

  console.log('낮은 가격순', data);

  const handlePriceDesc = () => {};

  const handlePriceAsc = async () => {
    const data = await getCollectionProduct('price-asc');
    console.log('높은 가격순 ', data);
  };

  return (
    <StPriceSection>
      <StPriceTitle onClick={handlePriceDesc}>낮은 가격순</StPriceTitle>
      <StPriceTitle>|</StPriceTitle>
      <StPriceTitle onClick={handlePriceAsc}>높은 가격순</StPriceTitle>
    </StPriceSection>
  );
}

const StPriceSection = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 111.5rem;
  margin: 5.4rem 0 2rem 0;

  gap: 1.4rem;
`;
const StPriceTitle = styled.span`
  color: ${({ theme }) => theme.colors.gray005};
  ${({ theme }) => theme.fonts.b5_14_medium_140};

  cursor: pointer;
`;
