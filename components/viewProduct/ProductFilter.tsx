import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkedItemsState, filterListState } from '../../core/atom';
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
  const filterListData = Object.values(filterlist.filterList);
  const filterListKeys = Object.keys(filterlist.filterList);
  const [checkedItems, setcheckedItems] = useRecoilState(checkedItemsState);
  const handleDropdown = (idx: number) => {
    setVisibility({
      ...visibility,
      [idx]: !visibility[idx],
    });
  };

  //const [repeat, setRepeat] = useState<null | number | void | string>();
  // const handleDrop = (idx: number) => {
  //   if (visibility[idx]) {
  //     clearTimeout(repeat);
  //     setRepeat(null);
  //     setVisibility({
  //       ...visibility,
  //       [idx]: !visibility[idx],
  //     });
  //   } else {
  //     setRepeat(
  //       setTimeout(() => {
  //         setVisibility({
  //           ...visibility,
  //           [0]: !visibility[0],
  //         });
  //         return 0;
  //       }, 400),
  //     );
  //   }
  // };

  return (
    <StFilterWrapper>
      {filterListKeys.map((title: string, idx: number) => (
        <StFilterSection isDrop={visibility[idx]} key={title}>
          <StFilterTitle
            onClick={() => {
              handleDropdown(idx);
            }}
          >
            <h2>{title}</h2>
            {visibility[idx] ? <IcClose /> : <IcOpen />}
          </StFilterTitle>
          {visibility[idx] && (
            <FilterDropdown
              categoryInfo={filterListData[idx]}
              categoryIdx={idx}
              isExcept={idx == 3 ? true : false}
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
