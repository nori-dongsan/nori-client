import useSWR from 'swr';
import { ViewProductProps } from '../../types/viewProduct';
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
// export const useGetBannerViewProduct = (
//   category: number,
//   currentPage: number,
//   viewProductData: string,
// ) => {
//   const { data, error } = useSWR(
//     [`/toy/list/${category}?page=${currentPage}&`, viewProductData],
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
export const getViewProductFilter = (filterQuery: ViewProductProps) => {
  console.log(filterQuery);
  return baseInstance.get(
    encodeURI(
      `/toy/list?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
    ),
  );
};
export const getBannerViewProductFilter = (
  category: number,
  filterQuery: ViewProductProps,
) => {
  console.log(filterQuery);
  return baseInstance.get(
    encodeURI(
      `/toy/list/${category}?search=${filterQuery.search}&type=${filterQuery.type}&month=${filterQuery.month}&priceCd=${filterQuery.priceCd}&playHowCd=${filterQuery.playHowCd}&toySiteCd=${filterQuery.toySiteCd}`,
    ),
  );
};
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
