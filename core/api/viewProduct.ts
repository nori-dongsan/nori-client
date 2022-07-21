import useSWR from 'swr';
import { ViewProductProps } from '../../types/viewProduct';
import { baseInstance } from '../axios';

export const useGetViewProduct = (viewProductData: ViewProductProps) => {
  const { data, error } = useSWR(
    ['/toy/list', viewProductData],
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
  viewProductData: ViewProductProps,
) => {
  const { data, error } = useSWR(
    ['/toy/list', category, viewProductData],
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
export const getBannerViewProduct = (params: { category: number }) => {
  const { data, error } = useSWR(['/toy/list', params], baseInstance.get, {
    errorRetryCount: 3,
  });
  return {
    toyFilterList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getViewProduct = () => {
  return baseInstance.get('/toy/list');
};
