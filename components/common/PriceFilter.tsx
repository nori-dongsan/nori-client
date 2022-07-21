import styled from '@emotion/styled';

export interface PriceFilterProps {
  priceDesc: boolean;
  handleClickPrice: (clickPrice: string) => void;
}

export default function PriceFilter(props: PriceFilterProps) {
  const { priceDesc, handleClickPrice } = props;

  return (
    <StPriceSection>
      <StPriceTitle
        onClick={() => handleClickPrice('price-desc')}
        priceDesc={priceDesc}
      >
        낮은 가격순
      </StPriceTitle>
      <span>|</span>
      <StPriceTitle
        onClick={() => handleClickPrice('price-asc')}
        priceDesc={!priceDesc}
      >
        높은 가격순
      </StPriceTitle>
    </StPriceSection>
  );
}

const StPriceSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;

  height: 2rem;
  margin-top: 2rem;

  color: ${({ theme }) => theme.colors.gray005};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
const StPriceTitle = styled.span<{ priceDesc: boolean }>`
  color: ${({ priceDesc, theme: { colors } }) =>
    priceDesc ? colors.black : colors.gray005};
  cursor: pointer;
`;
