import styled from '@emotion/styled';
import Router from 'next/router';
import router, { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { getBannerViewProduct } from '../../core/api/viewProduct';
import {
  checkedItemsState,
  filterCheckQuery,
  filterTagState,
  selectIconState,
  toyKindState,
} from '../../core/atom';
import {
  IcAllProduct,
  IcBabyProduct,
  IcCarProduct,
  IcRoleProduct,
  IcWalkProduct,
  IcStudyProduct,
  IcPlayGroundProduct,
} from '../../public/assets/icons';
import { FilterTagProps, ViewProductProps } from '../../types/viewProduct';

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
  // const [selectedIcon, setSeletedIcon] = useState<number>(0);
  const [selectedIcon, setSeletedIcon] =
    useRecoilState<number>(selectIconState);
  const [toyKindList, setToyKindList] = useRecoilState<string[]>(toyKindState);
  const [checkedItems, setcheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);
  const [filterQuery, setFilterCheckQuery] =
    useRecoilState<ViewProductProps>(filterCheckQuery);

  const handleFilterQuery = (selectIdx: number, newQuery: ViewProductProps) => {
    if (newQuery) setFilterCheckQuery(newQuery);

    Router.push({
      pathname: '/viewProduct',
      query: {
        filter: true,
        categoryId: selectIdx,
        search: newQuery.search,
        type: newQuery.type,
        month: newQuery.month,
        priceCd: newQuery.priceCd,
        playHowCd: newQuery.playHowCd,
        toySiteCd: newQuery.toySiteCd,
      },
    });
    // if doesn't work then use window.location.href
  };
  const handleProductIcon = (selectIdx: number) => {
    setSeletedIcon(selectIdx);
    setcheckedItems([
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
    ]);
    setFilterTagList([]);
    let newQuery: ViewProductProps;
    switch (selectIdx) {
      case 0:
        setToyKindList([
          '아기체육관',
          '모빌',
          '바운서',
          '쏘서',
          '점퍼루',
          '위고',
          '보행기',
          '걸음마 보조기',
          '러닝홈',
          '러닝테이블',
          '기타 학습완구',
          '미끄럼틀',
          '에어바운스',
          '트램펄린',
          '어린이 자동차',
          '흔들말',
          '그네',
          '소꿉놀이',
          '역할놀이',
          '기타',
        ]);
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        handleFilterQuery(0, newQuery);
        break;
      case 1:
        setToyKindList(['아기체육관', '모빌', '바운서']);
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        handleFilterQuery(1, newQuery);
        break;
      case 2:
        setToyKindList(['쏘서', '점퍼루', '위고', '보행기', '걸음마 보조기']);

        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        handleFilterQuery(2, newQuery);
        break;
      case 3:
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        setToyKindList(['러닝홈', '러닝테이블', '기타 학습 완구']);
        handleFilterQuery(3, newQuery);
        break;
      case 4:
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        setToyKindList(['미끄럼틀', '에어바운스', '트램펄린']);
        handleFilterQuery(4, newQuery);
        break;
      case 5:
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        setToyKindList(['어린이 자동차', '흔들말', '그네']);
        handleFilterQuery(5, newQuery);
        break;
      case 6:
        newQuery = {
          search: '',
          type: '',
          month: '',
          priceCd: '',
          playHowCd: '',
          toySiteCd: '',
        };
        setToyKindList(['소꿉 놀이', '역할 놀이']);
        handleFilterQuery(6, newQuery);
        break;
    }
  };
  // 패패

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
      {filterQuery.search && (
        <StSearchContent>
          <span>{`“ ${filterQuery.search} ”`}</span> 에 대한 검색 결과에요
        </StSearchContent>
      )}
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
  // padding: 0 3.6rem 5.4rem 3.6rem;

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
  margin: 0 3.6rem 5.4rem 3.6rem;
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
const StSearchContent = styled.div`
  align-self: flex-start;

  height: 2.5rem;
  margin: 0 0 1.2rem 0;
  color: ${({ theme }) => theme.colors.gray007};
  ${({ theme }) => theme.fonts.t3_19_medium_130};
  & > span {
    color: ${({ theme }) => theme.colors.gray009};
  }
`;
