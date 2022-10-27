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
  search?: string;
  type?: string;
  month?: string;
  priceCd?: string;
  playHowCd?: string;
  toySiteCd?: string;
}
export interface FilterData {
  type: string[];
  month: string[];
  price: string[];
  playHow: string[];
  store: string[];
}
export interface ToyFilterData {
  image: string;
  title: string;
  siteName: string;
  price: string;
  month: number;
  siteUrl: string;
}
export interface GetViewProduct {
  status: number;
  data: { data: { filterData: FilterData; result: ToyData[] } };
  success: boolean;
  message: string;
}
export interface ViewProductServerSide {
  search: string;
  type: string;
  month: string;
  price: string;
  playHow: string;
  store: string;
}
