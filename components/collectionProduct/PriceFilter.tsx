import styled from '@emotion/styled';

export interface PriceFilterProps {
  isClick: boolean[];
  handleClickPrice: (clickIdx: number) => void;
}
export default function PriceFilter(props: PriceFilterProps) {
  const { isClick, handleClickPrice } = props;

  return (
    <StPriceSection>
      <StPriceTitle onClick={() => handleClickPrice(0)} isClick={isClick[0]}>
        낮은 가격순
      </StPriceTitle>
      <span>|</span>
      <StPriceTitle onClick={() => handleClickPrice(1)} isClick={isClick[1]}>
        높은 가격순
      </StPriceTitle>
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

  color: ${({ theme }) => theme.colors.gray005};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
const StPriceTitle = styled.span<{ isClick: boolean }>`
  color: ${({ isClick, theme: { colors } }) =>
    isClick ? colors.black : colors.gray005};
  cursor: pointer;
`;
