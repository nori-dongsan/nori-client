import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { filterListState, filterTagState } from '../../core/atom';
import { FilterDropdownProps, FilterTagProps } from '../../types/viewProduct';

export default function FilterDropdown(props: FilterDropdownProps) {
  const {
    categoryInfo,
    isDrop,
    isExcept,
    categoryIdx,
    checkedItem,
    handleCheckedItems,
  } = props;
  const filterTagList = useRecoilValue<FilterTagProps[]>(filterTagState);
  const setfilterTagList = useSetRecoilState<FilterTagProps[]>(filterTagState);
  const handleCheckedItem = (elementIdx: number) => {
    if (checkedItem.has(elementIdx)) {
      checkedItem.delete(elementIdx);
    } else {
      checkedItem.add(elementIdx);
      const tag: FilterTagProps = {
        categoryIdx: categoryIdx,
        elementIdx: elementIdx,
        tagText: categoryInfo[elementIdx],
      };
      setfilterTagList([...filterTagList, tag]);
      console.log(filterTagList);
    }

    handleCheckedItems(checkedItem, categoryIdx);
  };

  return (
    <StDropdownWrapper isDrop={isDrop} isExcept={isExcept}>
      {categoryInfo.map((sort: string, elementIdx: number) => {
        return (
          <StLabel
            htmlFor={sort}
            key={sort}
            onChange={() => handleCheckedItem(elementIdx)}
            isChecked={checkedItem.has(elementIdx)}
          >
            <StInput type="checkbox" id={sort} name={sort} />
            <StFilterElement>{sort}</StFilterElement>
          </StLabel>
        );
      })}
    </StDropdownWrapper>
  );
}
const StInput = styled.input`
  border: 0.1rem solid ${({ theme }) => theme.colors.gray008};
  border-radius: 0.2rem;
  width: 1.4rem;
  height: 1.4rem;

  &:checked {
    border: none;
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='14' height='14' rx='2' fill='%231D8669'/%3E%3Cpath d='M4.08398 6.4457L6.41732 9.21654L9.91732 4.7832' stroke='white' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-size: 1.4rem 1.4rem;
    background-position: 100%;
    background-repeat: no-repeat;
  }
`;
const StLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  gap: 1rem;

  cursor: pointer;

  & > p {
    width: 15.2rem;
    height: 2rem;

    color: ${({ isChecked, theme: { colors } }) =>
      isChecked ? colors.black : colors.gray008};
    ${({ theme }) => theme.fonts.b5_14_medium_140};
  }
`;
const StFilterElement = styled.p`
  width: 15.2rem;
  height: 2rem;

  // color: {({ checked, theme: { colors } }) =>
  //   checked ? colors.black : colors.gray008};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
const StDropdownWrapper = styled.div<{ isExcept: boolean; isDrop: boolean }>`
  display: flex;
  flex-direction: column;

  width: 20rem;
  height: ${({ isExcept }) => (isExcept ? 'fit-content' : '14.8rem')};
  margin: 1.6rem 0 2.8rem 0;
  gap: 1.2rem;

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

  // @keyframes slide-fade-in-dropdown-animation {
  //   0% {
  //     transform: translateY(-1rem);
  //   }

  //   100% {
  //     transform: translateY(0);
  //   }
  // }
  /* fade out */

  @keyframes slide-fade-out-dropdown-animation {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  animation: ${({ isDrop }) =>
    isDrop
      ? 'slide-fade-in-dropdown-animation 0.4s ease'
      : 'slide-fade-out-dropdown-animation 0.4s ease'};

  // .slide-fade-out-dropdown {
  //   animation: slide-fade-out-dropdown-animation 0.4s ease;
  //   animation-fill-mode: forwards;
  // }
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
