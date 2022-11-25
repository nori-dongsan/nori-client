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
  filter?: boolean;
  categoryId?: string;
  search?: string;
  type?: string;
  month?: string;
  priceCd?: string;
  playHowCd?: string;
  toySiteCd?: string;
}
export interface FilterData {
  종류?: string[];
  '사용 연령': string[];
  가격: string[];
  특성: string[];
  스토어: string[];
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
