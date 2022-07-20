import styled from '@emotion/styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  checkedItemsState,
  filterListState,
  filterTagState,
} from '../../core/atom';
import { IcDeleteTag } from '../../public/assets/icons';
import { FilterTagProps } from '../../types/viewProduct';

export default function FilterTag(props: FilterTagProps) {
  const { categoryIdx, elementIdx, categoryKey, tagText } = props;
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);
  const filterTagValues = Object.values(filterTagList);
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
