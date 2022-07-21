import { MutableRefObject, RefObject } from 'react';

export interface FilterDropdownProps {
  categoryInfo: string[];
  categoryIdx: number;
  isDrop: boolean;
  isExcept: boolean;
  checkedItem: Set<number>;
  categoryKey: string;
}
export interface FilterTagProps {
  categoryIdx: number;
  elementIdx: number;
  categoryKey: string;
  tagText: string;
}
export interface ViewProductProps {
  search?: string;
  type: string;
  month?: string;
  price?: string;
  playHow?: string;
  store?: string;
}
