import { useRecoilState } from 'recoil';
import { checkedItemsState, filterTagState } from '../core/atom';
import { FilterDropdownProps, FilterTagProps } from '../types/viewProduct';

export const handleCheckedItems = (props: FilterTagProps) => {
  const { categoryIdx, elementIdx, categoryKey, tagText } = props;
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsState);
  const [filterTagList, setFilterTagList] =
    useRecoilState<FilterTagProps[]>(filterTagState);

  if (checkedItems[categoryIdx].has(elementIdx)) {
    checkedItems[categoryIdx].delete(elementIdx);
    setFilterTagList(
      filterTagList.filter(
        (item) =>
          item.categoryIdx !== categoryIdx &&
          item.elementIdx !== elementIdx &&
          item.tagText !== tagText,
      ),
    );
  } else {
    checkedItems[categoryIdx].add(elementIdx);
    const tag: FilterTagProps = {
      categoryIdx: categoryIdx,
      elementIdx: elementIdx,
      categoryKey: categoryKey,
      tagText: Object.values(checkedItems[categoryIdx])[elementIdx],
    };
    setFilterTagList([...filterTagList, tag]);
    console.log(filterTagList);
  }

  setCheckedItems({ ...checkedItems, [elementIdx]: checkedItems[categoryIdx] });
};
