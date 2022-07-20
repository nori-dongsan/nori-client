import styled from '@emotion/styled';
import { LoaderValue } from 'next/dist/shared/lib/image-config';
import React, { EventHandler, useState } from 'react';
import { IcClose, IcOpen } from '../../public/assets/icons';
import FilterDropdown from './FilterDropdown';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterListState } from '../../core/atom';
interface ProductFilterIcon {
  title: string;
  value: boolean;
}
export default function ProductFilter() {
  const { filterList } = useRecoilValue(filterListState);

  const filterListData = Object.values(filterList);
  const filterListKeys = Object.keys(filterList);
  const [visibility, setVisibility] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checkedItems, setCheckedItems] = useState<Set<number>[]>([
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
    new Set<number>(),
  ]);
  console.log(checkedItems);

  const handleDropdown = (idx: number) => {
    setVisibility({
      ...visibility,
      [idx]: !visibility[idx],
    });
  };

  const handleCheckedItems = (copyCheckedItem: Set<number>, idx: number) => {
    setCheckedItems({ ...checkedItems, [idx]: copyCheckedItem });
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
              handleCheckedItems={handleCheckedItems}
            />
          )}
        </StFilterSection>
      ))}
    </StFilterWrapper>
  );
}

const StFilterWrapper = styled.div`
  width: 20rem;
  height: 28rem;
  padding-left: 1.2rem;
  margin-right: 2.4rem;
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

// function repeat(repeat: any) {
//   throw new Error('Function not implemented.');
// }
