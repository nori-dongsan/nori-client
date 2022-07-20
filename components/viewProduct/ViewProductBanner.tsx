import styled from '@emotion/styled';
import { useState } from 'react';
import {
  IcViewProductIcon,
  IcAllProduct,
  IcBabyProduct,
  IcCarProduct,
  IcRoleProduct,
  IcWalkProduct,
  IcStudyProduct,
  IcPlayGroundProduct,
} from '../../public/assets/icons';

// interface ViewProductProps {
//   onClick: MouseCli;
// }

export default function ViewProductBanner() {
  //상품보기 뷰 배너 아이콘 요소 배열
  const productIcons = [
    '전체상품',
    '신생아완구',
    '걸음마준비완구',
    '학습완구',
    '실내대형완구',
    '승용완구',
    '역할놀이완구',
  ];
  const productSvgs = [
    <IcAllProduct />,
    <IcBabyProduct />,
    <IcWalkProduct />,
    <IcStudyProduct />,
    <IcPlayGroundProduct />,
    <IcCarProduct />,
    <IcRoleProduct />,
  ];
  const [isClicked, setIsClicked] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  //통신이나.. 클릭했을 때 나타나는 효과나.. 그런 거 아직 안 함
  const handleProductIcon = (idx: number) => {
    console.log(idx);
  };
  return (
    <StProductBannerWrapper>
      <h1>상품보기</h1>
      <StCategoryNav>
        {productIcons.map((item: string, idx: number) => {
          return (
            <StProductItem
              onClick={() => {
                handleProductIcon(idx);
              }}
              key={item}
              isClicked={isClicked[idx]}
            >
              {productSvgs[idx]}
              <p>{item}</p>
            </StProductItem>
          );
        })}
      </StCategoryNav>
    </StProductBannerWrapper>
  );
}

const StProductBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 117.6rem;
  margin: 7.1rem 0 0.4rem 0;
  padding: 0 3.6rem 5.4rem 3.6rem;

  border-bottom: 1px solid #d9d9d9;

  & > h1 {
    margin-bottom: 3.4rem;

    ${({ theme }) => theme.fonts.t1_28_medium_150};
  }
`;
const StCategoryNav = styled.nav`
  display: flex;
  gap: 3.2rem;
  justify-content: center;

  width: 110.4rem;
  height: 14.4rem;
`;
const StProductItem = styled.div<{ isClicked: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  color: ${({ isClicked, theme: { colors } }) =>
    isClicked ? colors.mainGreen : colors.black};
  ${({ theme }) => theme.fonts.b3_16_semibold_140};

  cursor: pointer;
`;
