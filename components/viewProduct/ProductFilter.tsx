import styled from '@emotion/styled';
import { useState } from 'react';
import { IcClose, IcOpen } from '../../public/assets/icons';
import FilterDropdown from './FilterDropdown';

export interface CategoryProps {
  categoryInfo: string[];
}
const store = [
  '국민장난감',
  '그린키드',
  '노리왕',
  '러브로',
  '리틀베이비',
  '빌리바바',
  '어텐션홈이벤트',
  '장난감점빵',
  '젤리바운스',
  '해피장난감',
];
const useAge = [
  ' 0~8개월',
  '9~14개월',
  '15~24개월',
  '25~35개월',
  '36~40개월',
  '41~60개월',
  '기타',
];
const cost = ['1만원 이하', '1-3만원', '3-5만원', '5-8만원', '8만원이상'];
const kind = [
  '쏘서',
  '점퍼루',
  '위고',
  '보행기',
  ' 걸음마 보조기',
  '미끄럼틀',
  '시소',
  '그네',
  '작은 장난감',
  '에어바운스',
  '트램펄린',
  '어린이 자동차',
  '흔들말',
  '소꿉놀이',
  '역할놀이',
  '기타',
];
const way = ['타고 노는', '만지고 노는'];
const filterInfo = ['종류', '사용 연령', '가격', '특성', '스토어'];

export default function ProductFilter() {
  const [visibility, setvisibility] = useState<boolean[]>([]);
  return (
    <StFilterWrapper>
      <StFilterSection>
        <h2>종류</h2>
        <IcOpen />
        {/* <FilterDropdown categoryInfo={kind} /> */}
      </StFilterSection>
      <StFilterSection>
        <h2>사용 연령</h2>
        <IcOpen />
        {/* <FilterDropdown categoryInfo={useAge} /> */}
      </StFilterSection>
      <StFilterSection>
        <h2>가격</h2>
        <IcOpen />
        {/* <FilterDropdown categoryInfo={cost} /> */}
      </StFilterSection>
      <StFilterSection>
        <h2>특성</h2>
        <IcOpen />
        {/* <FilterDropdown categoryInfo={way} /> */}
      </StFilterSection>
      <StFilterSection>
        <h2>스토어</h2>
        <IcOpen />
        {/* <FilterDropdown categoryInfo={store} /> */}
      </StFilterSection>
    </StFilterWrapper>
  );
}

const StFilterWrapper = styled.div`
  width: 20rem;
  height: 28rem;
  padding-left: 1.2rem;
`;

const StFilterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 20rem;
  height: 5.6rem;
  padding: 1.7rem 0;

  border-bottom: 0.1rem #d9d9d9 solid;
  font: ${({ theme }) => theme.fonts.b4_15_semibold_146};
`;

/* or 21px */
// display `-객체의 노출여부/표현방식--`
// ( justify-content / align-items)
// ( flex-direction / flex-wrap / flex-flow ) → flex ~로 시작하는 것들
// list-style
// position `-위치/좌표--`
// float
// clear

// width
// height `-크기/여백--`
// padding
// margin

// border
// background `-윤곽/배경--`
// color
// font `-글자/정렬--`

// text-decoration
// text-align / vertical-align

// white-space
// other text
// content `-내용--`
