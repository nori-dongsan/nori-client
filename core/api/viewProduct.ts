import useSWR from 'swr';
import { baseInstance } from '../axios';

export const useGetViewProduct = () => {};
export const getViewProduct = () => {};

export const useGetBannerViewProduct = (params: { category: number }) => {
  const { data, error } = useSWR(['/toy/list', params], baseInstance.get, {
    errorRetryCount: 3,
  });
  return {
    toyFilterList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getBannerViewProduct = () => {
  return;
};
