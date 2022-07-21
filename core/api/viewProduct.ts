import useSWR from 'swr';
import { ViewProductProps } from '../../types/viewProduct';
import { baseInstance } from '../axios';

export const useGetViewProduct = (
  currentPage: number,
  viewProductData: ViewProductProps,
) => {
  const { data, error } = useSWR(
    [`/toy/list?page=${currentPage}&`, viewProductData],
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    toyFilterList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const useGetBannerViewProduct = (
  category: number,
  currentPage: number,
  viewProductData: ViewProductProps,
) => {
  const { data, error } = useSWR(
    [`${category}?page=${currentPage}&`, viewProductData],
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    toyFilterList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getBannerViewProduct = (category: number, currentPage: number) => {
  return baseInstance.get(`/toy/list/${category}?page=${currentPage}`);
};
export const getViewProduct = (currentPage: number) => {
  return baseInstance.get(`/toy/list/?page=${currentPage}`);
};
