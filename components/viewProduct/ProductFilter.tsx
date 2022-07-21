import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  checkedItemsState,
  filterListState,
  toyKindState,
} from '../../core/atom';
import { IcClose, IcOpen } from '../../public/assets/icons';
import FilterDropdown from './FilterDropdown';

export default function ProductFilter() {
  const filterlist = useRecoilValue(filterListState);

  const [visibility, setVisibility] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [visibilityAnimation, setVisibilityAnimation] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const filterListData = Object.values(filterlist.filterList);
  const filterListKeys = Object.keys(filterlist.filterList);
  const [checkedItems, setcheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);
  const toyKindList = useRecoilValue<string[]>(toyKindState);
  const [repeat, setRepeat] = useState<any>(null);
  const handleDropdown = (idx: number) => {
    if (visibility[idx]) {
      let timeoutId = repeat;
      window.clearTimeout(timeoutId);
      setRepeat(null);
      setVisibilityAnimation({
        ...visibilityAnimation,
        [idx]: true,
      });
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation({
            ...visibilityAnimation,
            [idx]: false,
          });
        }, 400),
      );
    }

    setVisibility({
      ...visibility,
      [idx]: !visibility[idx],
    });
  };

  return (
    <StFilterWrapper>
      {filterListKeys.map((title: string, idx: number) => (
        <StFilterSection isDrop={visibilityAnimation[idx]} key={title}>
          <StFilterTitle
            onClick={() => {
              handleDropdown(idx);
            }}
          >
            <h2>{title}</h2>
            {visibilityAnimation[idx] ? <IcClose /> : <IcOpen />}
          </StFilterTitle>
          {visibilityAnimation[idx] && (
            <FilterDropdown
              categoryInfo={filterListData[idx]}
              categoryIdx={idx}
              isExcept={
                idx == 3 || (idx == 4 && toyKindList.length !== 0)
                  ? true
                  : false
              }
              isDrop={visibility[idx]}
              checkedItem={checkedItems[idx]}
              categoryKey={title}
            />
          )}
        </StFilterSection>
      ))}
    </StFilterWrapper>
  );
}

const StFilterWrapper = styled.div`
  width: 20rem;
  height: fit-content;
  padding-left: 1.2rem;
  margin-right: 2.4rem;
  margin-bottom: 7.2rem;

  align-self: flex-start;
  position: sticky;
  top: 8.2rem;
`;
const StFilterTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
`;
const StFilterSection = styled.section<{ isDrop: boolean }>`
  width: 20rem;
  height: fit-content;
  padding: ${({ isDrop }) => (isDrop ? ' 1.7rem 0 0 0' : '1.7rem 0')};

  border-bottom: 0.1rem #d9d9d9 solid;
  ${({ theme }) => theme.fonts.b4_15_semibold_146};
  cursor: pointer;
`;
