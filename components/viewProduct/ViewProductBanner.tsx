import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { toyKindState } from '../../core/atom';
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
  const [selectedIcon, setSeletedIcon] = useState<number>(0);
  const [toyKindList, setToyKindList] = useRecoilState<string[]>(toyKindState);
  const handleProductIcon = (selectIdx: number) => {
    if (selectedIcon == selectIdx) return;
    setSeletedIcon(selectIdx);
    switch (selectIdx) {
      case 0:
        setToyKindList([]);
        break;
      case 1:
        setToyKindList(['아기체육관', '모빌', '바운서']);
        break;
      case 2:
        setToyKindList(['쏘서', '점퍼루', '위고', '보행기', '걸음마 보조기']);
        break;
      case 3:
        setToyKindList(['러닝홈', '러닝테이블', '기타 학습 완구']);
        break;
      case 4:
        setToyKindList(['미끄럼틀', '에어바운스', '트램펄린']);
        break;
      case 5:
        setToyKindList(['어린이 자동차', '흔들말', '그네']);
        break;
      case 6:
        setToyKindList(['소꿉 놀이', '역할 놀이']);
        break;
    }
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
              isClicked={idx}
              selectedIcon={selectedIcon}
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
const StProductItem = styled.div<{ isClicked: number; selectedIcon: number }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;

  color: ${({ selectedIcon, isClicked, theme: { colors } }) =>
    selectedIcon == isClicked ? colors.mainGreen : colors.black};
  ${({ theme }) => theme.fonts.b3_16_semibold_140};

  cursor: pointer;
`;
