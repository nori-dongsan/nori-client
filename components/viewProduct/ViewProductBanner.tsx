import styled from '@emotion/styled';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { checkedItemsState, filterTagState } from '../../core/atom';
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
  const setcheckedItems = useSetRecoilState<Set<number>[]>(checkedItemsState);
  const setFilterTagList = useSetRecoilState<FilterTagProps[]>(filterTagState);
  const handleProductIcon = (selectIdx: number) => {
    setcheckedItems([
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
      new Set<number>(),
    ]);
    setFilterTagList([]);
    Router.push({
      pathname: '/viewProduct',
      query: {
        categoryId: selectIdx,
      },
    });
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
            >
              {productSvgs[idx]}
              <p>{item}</p>
            </StProductItem>
          );
        })}
      </StCategoryNav>
      {useRouter().query.search && (
        <StSearchContent>
          <span>{`“ ${useRouter().query.search} ”`}</span> 에 대한 검색 결과에요
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
const StProductItem = styled.div<{
  isClicked: number;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
  color: ${({ isClicked, theme: { colors } }) =>
    (useRouter().query.categoryId
      ? Number(useRouter().query.categoryId)
      : 0) === isClicked
      ? colors.mainGreen
      : colors.black};
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
