import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  checkedItemsState,
  filterCheckQuery,
  filterTagState,
  toyKindState,
} from '../../core/atom';
import {
  FilterDropdownProps,
  FilterTagProps,
  ViewProductProps,
} from '../../types/viewProduct';
import Router from 'next/router';

export default function FilterDropdown(props: FilterDropdownProps) {
  const { categoryInfo, isDrop, isExcept, categoryIdx, categoryKey } = props;
  const toyKindList = useRecoilValue<string[]>(toyKindState);
  const [checkedItems, setCheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);

  const [filterQuery, setFilterCheckQuery] =
    useRecoilState<ViewProductProps>(filterCheckQuery);

  const handleFilterQuery = (newQuery: ViewProductProps) => {
    setFilterCheckQuery(newQuery);

    Router.push({
      pathname: '/viewProduct',
      query: {
        filter: true,
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

  const handleCheckedItems = (
    categoryIdx: number,
    elementIdx: number,
    tagText: string,
  ) => {
    const tag: FilterTagProps = {
      categoryIdx: categoryIdx,
      elementIdx: elementIdx,
      categoryKey: categoryKey,
      tagText: tagText,
    };
    if (checkedItems[categoryIdx].has(elementIdx)) {
      checkedItems[categoryIdx].delete(elementIdx);
      const deleteidx = filterTagList.findIndex((item) => {
        return (
          item.categoryIdx === categoryIdx && item.elementIdx === elementIdx
        );
      });

      let copyFilterTagList = [...filterTagList];
      copyFilterTagList.splice(deleteidx, 1);
      setFilterTagList(copyFilterTagList);
      console.log(filterTagList);
    } else {
      checkedItems[categoryIdx].add(elementIdx);
      setFilterTagList([...filterTagList, tag]);
      handleQuery(categoryIdx, elementIdx, tagText);
    }

    setCheckedItems({
      ...checkedItems,
      [categoryIdx]: checkedItems[categoryIdx],
    });
  };
  const handleQuery = (
    categoryIdx: number,
    elementIdx: number,
    tagText: string,
  ) => {
    let newQuery: ViewProductProps;
    let newStr: string;
    switch (categoryIdx) {
      case 0:
        newStr = '';
        checkedItems[0].forEach(function (item, index) {
          newStr += `${categoryInfo[index]} `;
        });
        newQuery = {
          search: filterQuery.search,
          type: newStr,
          month: filterQuery.month,
          priceCd: filterQuery.priceCd,
          playHowCd: filterQuery.playHowCd,
          toySiteCd: filterQuery.toySiteCd,
        };
        handleFilterQuery(newQuery);
        console.log('str', newStr);
        break;
      case 1:
        newStr = '';
        checkedItems[1].forEach(function (item, index) {
          newStr += `${item + 1}`;
        });
        newQuery = {
          search: filterQuery.search,
          type: filterQuery.type,
          month: newStr,
          priceCd: filterQuery.priceCd,
          playHowCd: filterQuery.playHowCd,
          toySiteCd: filterQuery.toySiteCd,
        };
        handleFilterQuery(newQuery);
        console.log('str', newStr);
        break;
      case 2:
        newStr = '';
        checkedItems[2].forEach(function (item, index) {
          newStr += `${item + 1}`;
        });
        newQuery = {
          search: filterQuery.search,
          type: filterQuery.type,
          month: filterQuery.month,
          priceCd: newStr,
          playHowCd: filterQuery.playHowCd,
          toySiteCd: filterQuery.toySiteCd,
        };
        handleFilterQuery(newQuery);
        console.log('str', newStr);
        break;
      case 3:
        newStr = '';
        checkedItems[3].forEach(function (item, index) {
          newStr += `${item + 1}`;
        });
        newQuery = {
          search: filterQuery.search,
          type: filterQuery.type,
          month: filterQuery.month,
          priceCd: filterQuery.priceCd,
          playHowCd: newStr,
          toySiteCd: filterQuery.toySiteCd,
        };
        handleFilterQuery(newQuery);
        console.log('str', newStr);
        break;
      case 4:
        newStr = '';
        checkedItems[4].forEach(function (item, index) {
          newStr += `${item + 1}`;
        });
        newQuery = {
          search: filterQuery.search,
          type: filterQuery.type,
          month: filterQuery.month,
          priceCd: filterQuery.priceCd,
          playHowCd: filterQuery.playHowCd,
          toySiteCd: newStr,
        };
        handleFilterQuery(newQuery);
        console.log('str', newStr);
        break;
    }
  };
  return (
    <StDropdownWrapper
      isDrop={isDrop}
      isExcept={isExcept}
      className={`${
        isDrop ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'
      }`}
    >
      {categoryKey === '종류' && toyKindList.length !== 0
        ? toyKindList.map((tagText: string, elementIdx: number) => {
            return (
              <StLabel
                htmlFor={`${tagText}${categoryIdx}`}
                key={`${tagText}${categoryIdx}`}
                onChange={() =>
                  handleCheckedItems(categoryIdx, elementIdx, tagText)
                }
                isChecked={checkedItems[categoryIdx].has(elementIdx)}
              >
                <StInput
                  type="checkbox"
                  id={`${tagText}${categoryIdx}`}
                  name={`${tagText}${categoryIdx}`}
                  checked={checkedItems[categoryIdx].has(elementIdx)}
                />
                <StFilterElement>{tagText}</StFilterElement>
              </StLabel>
            );
          })
        : categoryInfo.map((tagText: string, elementIdx: number) => {
            return (
              <StLabel
                htmlFor={`${tagText}${categoryIdx}`}
                key={`${tagText}${categoryIdx}`}
                onChange={() =>
                  handleCheckedItems(categoryIdx, elementIdx, tagText)
                }
                isChecked={checkedItems[categoryIdx].has(elementIdx)}
              >
                <StInput
                  type="checkbox"
                  id={`${tagText}${categoryIdx}`}
                  name={`${tagText}${categoryIdx}`}
                  checked={checkedItems[categoryIdx].has(elementIdx)}
                />
                <StFilterElement>{tagText}</StFilterElement>
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

  @keyframes slide-fade-in-dropdown-animation {
    0% {
      max-height: 14.8rem;
      overflow: hidden;
      opacity: 1;
    }

    100% {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }
  }

  /* fade out */

  @keyframes slide-fade-out-dropdown-animation {
    0% {
      opacity: 0;
      max-height: 0;
      overflow: hidden;
    }

    100% {
      opacity: 1;
      max-height: 14.8rem;
      overflow: hidden;
    }
  }

  animation: ${({ isDrop }) =>
    isDrop
      ? 'slide-fade-in-dropdown-animation 0.2s ease-out'
      : 'slide-fade-out-dropdown-animation 0.2s ease-out'};
`;
