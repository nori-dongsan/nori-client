import styled from '@emotion/styled';
import { IcPlus } from '../../public/assets/icons';
import FilterDropdown from './FilterDropdown';

export interface CategoryProps {
  categoryInfo: string[];
}
const store = [
  '그린키드',
  '국민장난감',
  '노리왕',
  '러브로',
  '리틀베이비',
  '빌리바바',
  '어텐션홈이벤트',
  '장난감점빵',
  '젤리바운스',
  '해피장난감',
];
export default function ProductFilter() {
  return (
    <StFilterWrapper>
      <StFilterSection>
        <StSectionTitle>
          <h2>장난감 종류</h2>
          <IcPlus />
        </StSectionTitle>
        <FilterDropdown categoryInfo={store} />
        <p>모든 장난감</p>
      </StFilterSection>
      <StFilterSection>
        <StSectionTitle>
          <h2>개월 수</h2>
          <IcPlus />
        </StSectionTitle>
        <p>모든 개월 수</p>
      </StFilterSection>
      <StFilterSection>
        <StSectionTitle>
          <h2>가격</h2>
          <IcPlus />
        </StSectionTitle>
        <p>모든 개월 수</p>
      </StFilterSection>
      <StFilterSection>
        <StSectionTitle>
          <h2>놀이 방법</h2>
          <IcPlus />
        </StSectionTitle>
        <p>모든 놀이방법</p>
      </StFilterSection>
      <StFilterSection>
        <StSectionTitle>
          <h2>스토어</h2>
          <IcPlus />
        </StSectionTitle>
        <p>모든 스토어</p>
      </StFilterSection>
    </StFilterWrapper>
  );
}

const StFilterWrapper = styled.div`
  width: 21.2rem;
  height: 52.8rem;
  padding-left: 1.2rem;
`;
const StSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;

  width: 20rem;

  text-align: center;
  & > h2 {
    height: 2rem;

    color: #000000;
    font-size: 1.4rem;
  }
`;
const StFilterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 20rem;
  height: 7.6rem;

  border-bottom: 0.1rem #d9d9d9 solid;

  color: #d9d9d9;
  font-size: 1.5rem;
  font-weight: 400;

  & > p {
    margin-top: 0.4rem;
  }
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
