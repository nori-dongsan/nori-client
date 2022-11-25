import { Router } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import useSWR from 'swr';
import { URLFormatOptions } from 'url';
import { ToyData } from '../../types/toy';
import { GetViewProduct, ViewProductProps } from '../../types/viewProduct';
import { checkQuery } from '../../utils/check';
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
// export const getViewProductFilter = (filterQuery: ViewProductProps) => {
//   console.log(filterQuery);
//   return baseInstance.get(

//   );
// };
export const getViewProductFilter = (filterQuery: string) => {
  const { data, error } = useSWR<GetViewProduct>(
    encodeURI(`/toy/list?${filterQuery}`),
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    filterData: data?.data.data.filterData,
    result: data?.data.data.result,
    error,
  };
};
export const getBannerViewProductFilter = (
  category: number,
  filterQuery: string,
) => {
  const { data, error } = useSWR<GetViewProduct>(
    encodeURI(`/toy/list/${category}?${filterQuery}`),
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    filterData: data?.data.data.filterData,
    result: data?.data.data.result,
    error,
  };
};
export const getBannerViewProduct = (category: number) => {
  return baseInstance.get(`/toy/list/${category}?`);
};
export const getViewProduct = () => {
  return baseInstance.get(`/toy/list`);
};
