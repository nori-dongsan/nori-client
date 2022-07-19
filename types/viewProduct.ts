export interface FilterDropdownProps {
  categoryInfo: string[];
  categoryIdx: number;
  isDrop: boolean;
  isExcept: boolean;
  checkedItem: Set<number>;
  handleCheckedItems: (copyCheckedItem: Set<number>, idx: number) => void;
}
export interface ProductFilter {
  tagName: string;
}
export interface FilterTagProps {
  categoryIdx: number;
  elementIdx: number;
  tagText: string;
}
