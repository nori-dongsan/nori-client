import axios from 'axios';

import useSWR from 'swr';
import { baseInstance } from '../axios';

export const useGetCollectionProduct = (key: string) => {
  const { data, error } = useSWR(
    // `https://jsonplaceholder.typicode.com/todos`,
    `/collection?sort=${key}`,
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );

  console.log(data);
  return {
    productList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getCollectionProduct = (key: string) => {
  // return baseInstance.get(`https://jsonplaceholder.typicode.com/todos`);
  return baseInstance.get(`/collection?sort=${key}`);
};
