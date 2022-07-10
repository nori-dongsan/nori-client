import styled from '@emotion/styled';
import { CategoryProps } from './ProductFilter';

export default function FilterDropdown({ categoryInfo }: CategoryProps) {
  return (
    <StDropdownWrapper>
      {categoryInfo.map((sort: string) => {
        return (
          <StLabel htmlFor={sort}>
            <StInput type="checkbox" id={sort} name={sort} />
            <p>{sort}</p>
          </StLabel>
        );
      })}
    </StDropdownWrapper>
  );
}

const StInput = styled.input``;
const StLabel = styled.label`
  & > p {
    width: 15.2rem;
    height: 2rem;

    font: ${({ theme }) => theme.fonts.b5_14_medium_140};
   
`;
const StDropdownWrapper = styled.div`
  width: 20rem;
  height: 14.8rem;
  margin: 1.6rem 0 2.8rem 0;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1rem; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    width: 0.6rem;
    height: 5.216rem; /* 스크롤바의 길이 */

    border: 0.2rem solid transparent;
    border-radius: 1.8rem;
    background: #c5c5c5; /* 스크롤바의 색상 */
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    border: 0.1rem solid #e6e6e6;
    border-top: none;
    border-bottom: none;
    background: ${({ theme }) =>
      theme.colors.gray002}; /*스크롤바 뒷 배경 색상*/
  }
`;
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
