
import axios from 'axios';

import useSWR from 'swr';
import { baseInstance } from '../axios';

export const useGetCollectionProduct = (key: string) => {
  const { data, error } = useSWR(`/collection?sort=${key}`, baseInstance.get, {
    errorRetryCount: 3,
  });

  return {
    productList: data,
    isLoading: !error && !data,
    isError: error,
  };

};
export const getCollectionProduct = (key: string) => {
  return baseInstance.get(`/collection?sort=${key}`);
};
