import useSWR from 'swr';
import { CommunityData } from '../../community';
import { Response } from '../../types/api';
import { PutCommunityBody, PostCommentBody } from '../../types/community';
import { baseInstance } from '../axios';
import LocalStorage from '../localStorage';

export const useGetCollectionProduct = (key: string) => {
  const { data } = useSWR(`/collection?sort=${key}`, baseInstance.get);
  console.log(data);
  return data;
};

export const useGetCommunityDetail = (id: string) => {
  const { data, error } = useSWR<Response<Omit<CommunityData, 'image'>>>(
    `/board/${id}`,
    baseInstance.get,
  );
  return {
    data: data?.data?.data,
    error,
  };
};
export const useCommunityDetail = (id: string) => {
  const { data, error } = useSWR<
    Response<
      Pick<CommunityData, 'title' | 'category' | 'content' | 'imageList'>
    >
  >(`/board/${id}`, baseInstance.get);
  return {
    data: data?.data?.data,
    error,
  };
};
export const getCollectionProduct = (key: string) => {
  return baseInstance.get(`/collection?sort=${key}`);
};
export const postCommunity = (body: FormData) => {
  return baseInstance.post('/board', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      accessToken: LocalStorage.getItem('accessToken'),
      refreshToken: LocalStorage.getItem('refreshToken'),
    },
  });
};
export const getCommunity = () => {
  return baseInstance.get('/board');
};

export const deleteCommunity = async (id: string) => {
  try {
    const { status } = await baseInstance.delete(`/board/${id}`, {
      headers: {
        accessToken: LocalStorage.getItem('accessToken'),
        refreshToken: LocalStorage.getItem('refreshToken'),
      },
    });
    return status;
  } catch (e) {
    console.log(e);
  }
};

export const putCommunity = (id: string, body: FormData) => {
  return baseInstance.put(`/board/${id}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
      accessToken: LocalStorage.getItem('accessToken'),
      refreshToken: LocalStorage.getItem('refreshToken'),
    },
  });
};

export const postReply = async (body: PostCommentBody) => {
  try {
    const { status } = await baseInstance.post('/board/comment', body, {
      headers: {
        accessToken: LocalStorage.getItem('accessToken'),
        refreshToken: LocalStorage.getItem('refreshToken'),
      },
    });
    return status;
  } catch (e) {
    console.log(e);
  }
};
