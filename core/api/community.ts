import useSWR from 'swr';
import { PostCommunityBody } from '../../types/community';
import { baseInstance } from '../axios';

// export const useGetCollectionProduct = (key: string) => {
//   const { data } = useSWR(`/collection?sort=${key}`, baseInstance.get);
//   console.log(data);
//   return data;
// };
// export const getCollectionProduct = (key: string) => {
//   return baseInstance.get(`/collection?sort=${key}`);
// };

export const useGetCommunityList = () => {
  const { data, error } = useSWR(`/board`, baseInstance.get, {
    errorRetryCount: 3,
  });

  return {
    communityList: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export const getCommunityList = () => {
  return baseInstance.get('/board');
};
export const postCommunity = async (body: PostCommunityBody) => {
  try {
    const { data } = await baseInstance.post('/board', body);
    return data;
  } catch (e) {
    console.log(e);
  }
};
