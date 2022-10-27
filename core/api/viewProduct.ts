import useSWR from 'swr';
import { ToyData } from '../../types/toy';
import { GetViewProduct, ViewProductProps } from '../../types/viewProduct';
import { baseInstance } from '../axios';

// export const useGetViewProduct = (
//   currentPage: number,
//   viewProductData: string,
// ) => {
//   const { data, error } = useSWR(
//     [`/toy/list?page=${currentPage}&`, viewProductData],
//     baseInstance.get,
//     {
//       errorRetryCount: 3,
//     },
//   );
//   return {
//     toyFilterList: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
// export interface GetViewProduct {
//   result: {
//     data: { data: { filterData: FilterData; toyFilterList: ToyFilterData[] } };
//   };
//   isLoading: boolean;
//   isError: string;
// }

export const getBannerViewProductFilter = (
  category: number,
  filterQuery: ViewProductProps,
) => {
  const { data, error } = useSWR<GetViewProduct, Error>(
    `/toy/list/${category}?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    data: data?.data,
    isLoading: error && !data,
    isError: error,
  };
};
export const getViewProductFilter = (filterQuery: ViewProductProps) => {
  const { data, error } = useSWR<GetViewProduct, Error>(
    `/toy/list?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    data: data?.data,
    isLoading: !error && !data,
    isError: error,
  };
};
//아래는 데모데이때까지의 api 연결
// export const getViewProductFilter = (filterQuery: ViewProductProps) => {
//   console.log(filterQuery);
//   return baseInstance.get(
//     encodeURI(
//       `/toy/list?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
//     ),
//   );
// };
//아래는 데모데이때까지의 api 연결
// export const getBannerViewProductFilter = (
//   category: number,
//   filterQuery: ViewProductProps,
// ) => {
//   console.log(filterQuery);
//   return baseInstance.get(
//     encodeURI(
//       `/toy/list/${category}?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
//     ),
//   );
// };
//아래는 안 쓴 api
// export const getBannerViewProduct = (category: number, currentPage: number) => {
//   return baseInstance.get(`/toy/list/${category}?page=${currentPage}`);
// };
// export const getViewProduct = (currentPage: number) => {
//   return baseInstance.get(`/toy/list/?page=${currentPage}`);
// };
// export const useGetViewProduct = (viewProductData: string) => {
//   const { data, error } = useSWR(
//     [`/toy/list?`, viewProductData],
//     baseInstance.get,
//     {
//       errorRetryCount: 3,
//     },
//   );
//   return {
//     toyFilterList: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
// export const useGetBannerViewProduct = (
//   category: number,
//   viewProductData: string,
// ) => {
//   const { data, error } = useSWR(
//     [`/toy/list/${category}?`, viewProductData],
//     baseInstance.get,
//     {
//       errorRetryCount: 3,
//     },
//   );
//   return {
//     toyFilterList: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };
export const getBannerViewProduct = (category: number) => {
  return baseInstance.get(`/toy/list/${category}?`);
};
export const getViewProduct = () => {
  return baseInstance.get(`/toy/list`);
};
