import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { filterListState } from '../../core/atom';
import { IcClose, IcOpen } from '../../public/assets/icons';
import FilterDropdown from './FilterDropdown';

interface ProductFilterIcon {
  title: string;
  value: boolean;
}
export default function ProductFilter() {
  // const filterList = {
  //   스토어: [
  //     '국민장난감',
  //     '그린키드',
  //     '러브로',
  //     '리틀베이비',
  //     '빌리바바',
  //     '어텐션홈이벤트',
  //     '장난감점빵',
  //     '젤리바운스',
  //     '해피장난감',
  //   ],
  //   '사용 연령': [
  //     '0~5개월',
  //     '6~11개월',
  //     '12~17개월',
  //     '18~23개월',
  //     '24~35개월',
  //     '36~47개월',
  //     '48~60개월',
  //     '기타',
  //   ],
  //   가격: ['1만원 미만', '1-3만원', '3-5만원', '5-8만원', '8만원이상'],
  //   특성: ['타고 노는', '만지고 노는', '기타'],
  //   '장난감 종류': [
  //     '아기체육관',
  //     '모빌',
  //     '바운서',
  //     '쏘서',
  //     '점퍼루',
  //     '위고',
  //     '보행기',
  //     '걸음마 보조기',
  //     '러닝홈',
  //     '러닝테이블',
  //     '기타 학습완구',
  //     '미끄럼틀',
  //     '에어바운스',
  //     '트램펄린',
  //     '어린이 자동차',
  //     '흔들말',
  //     '그네',
  //     '소꿉놀이',
  //     '역할놀이',
  //     '기타',
  //   ],
  // };
  const [filterlist, setFilterList] = useRecoilState(filterListState);
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
  const filterListData = Object.values(filterlist.filterList);
  const filterListKeys = Object.keys(filterlist.filterList);
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

// function repeat(repeat: any) {
//   throw new Error('Function not implemented.');
// }
