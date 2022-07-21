import useSWR from 'swr';
import { baseInstance } from '../axios';

export const useGetCollectionProduct = (theme: number, sort: string) => {
  const { data, error } = useSWR(
    `/collection?theme=${theme}&sort=${sort}`,
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    productList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getCollectionProduct = (key: string) => {
  return baseInstance.get(`/collection?theme=0`);
};

export const getMainProduct = () => {
  return baseInstance.get('/home');
};
