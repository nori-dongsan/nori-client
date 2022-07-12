import styled from '@emotion/styled';
import { IcViewProductIcon } from '../../public/assets/icons';

export default function ViewProductBanner() {
  //상품보기 뷰 배너 아이콘 요소 배열
  const productIcons = [
    '전체',
    '쏘서, 점퍼루',
    '걸음마 보조기',
    '실내 놀이터',
    '작은 장난감',
    '바운스',
    '승용완구',
    '역할놀이',
  ];
  return (
    <StViewProductWrapper>
      <h1>상품보기</h1>
      <StCategoryNav>
        {productIcons.map((item: string) => {
          return (
            <StProductItem>
              <IcViewProductIcon />
              <p>{item}</p>
            </StProductItem>
          );
        })}
      </StCategoryNav>
    </StViewProductWrapper>
  );
}

const StViewProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 7.1rem 0 5.4rem 0;

  & > h1 {
    font: ${({ theme }) => theme.fonts.t1_28_medium_150};
  }
`;
const StCategoryNav = styled.nav`
  display: flex;
  gap: 3.2rem;

  width: 110.4rem;
  height: 14.4rem;
  margin: 3.4rem 3.6rem 5.4rem 3.6rem;
`;
const StProductItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  font: ${({ theme }) => theme.fonts.b3_16_semibold_140};

  cursor: pointer;
`;
