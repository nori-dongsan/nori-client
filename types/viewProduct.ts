import { MutableRefObject, RefObject } from 'react';
import { ToyData } from './toy';

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
  filter?: string;
  categoryId?: string;
  search?: string;
  type?: string;
  month?: string;
  priceCd?: string;
  playHowCd?: string;
  toySiteCd?: string;
}
export interface FilterData {
  type?: string[];
  month: string[];
  price: string[];
  playHow: string[];
  store: string[];
}
export interface GetViewProduct {
  filterData: FilterData;
  result: ToyData[];
}
