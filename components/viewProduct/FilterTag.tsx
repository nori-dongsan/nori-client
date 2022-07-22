import styled from '@emotion/styled';
import Router from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  checkedItemsState,
  filterCheckQuery,
  filterListState,
  filterTagState,
  toyKindState,
} from '../../core/atom';
import { IcDeleteTag } from '../../public/assets/icons';
import { FilterTagProps, ViewProductProps } from '../../types/viewProduct';

export default function FilterTag(props: FilterTagProps) {
  const { categoryIdx, elementIdx, categoryKey, tagText } = props;
  const [checkedItems, setCheckedItems] =
    useRecoilState<Set<number>[]>(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);
  const [filterQuery, setFilterCheckQuery] =
    useRecoilState<ViewProductProps>(filterCheckQuery);
  const toyKindList = useRecoilValue<string[]>(toyKindState);

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

  const handleFilterTag = (
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
    } else {
      checkedItems[categoryIdx].add(elementIdx);
      setFilterTagList([...filterTagList, tag]);
      console.log(filterTagList);
    }

    setCheckedItems({
      ...checkedItems,
      [categoryIdx]: checkedItems[categoryIdx],
    });
    handleQuery(categoryIdx, elementIdx, tagText);
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
          newStr += `${toyKindList[index]} `;
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
    <StFilterTag>
      <h2>{tagText === '기타' ? `${tagText} (${categoryKey})` : tagText}</h2>
      <StDeleteBtn
        onClick={() => handleFilterTag(categoryIdx, elementIdx, tagText)}
      />
    </StFilterTag>
  );
}
const StFilterTag = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  padding: 0.6rem 0.8rem 0.6rem 1rem;
  margin: 0.5rem;

  border-radius: 0.6rem;
  background-color: ${({ theme }) => theme.colors.gray002};
  color: ${({ theme }) => theme.colors.gray009};
  ${({ theme }) => theme.fonts.b5_14_medium_140};
`;
const StDeleteBtn = styled(IcDeleteTag)`
  margin-left: 0.713rem;

  cursor: pointer;
`;
