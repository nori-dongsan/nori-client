import useSWR from 'swr';
import { baseInstance } from '../axios';

export const useGetCommunityList = (key: string) => {
  const { data } = useSWR(`/community?sort=${key}`, baseInstance.get);

  return {
    communityList: data,
  };
};
