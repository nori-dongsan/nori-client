import useSWR from 'swr';
import { PutCommunityBody, PostCommentBody } from '../../types/community';
import { baseInstance } from '../axios';

export const useGetCollectionProduct = (key: string) => {
  const { data } = useSWR(`/collection?sort=${key}`, baseInstance.get);
  console.log(data);
  return data;
};

export const getCollectionProduct = (key: string) => {
  return baseInstance.get(`/collection?sort=${key}`);
};

export const getCommunity = () => {
  return baseInstance.get(`/board`);
};

export const postCommunity = (body: FormData) => {
  return baseInstance.post('/board', body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getCommunityDetail = (id: string) => {
  return baseInstance.get(`/board/${id}`);
};

export const deleteCommunity = async (id: string) => {
  try {
    const { status } = await baseInstance.delete(`/board/${id}`);
    return status;
  } catch (e) {
    console.log(e);
  }
};

export const putCommunity = (id: string, body: FormData) => {
  return baseInstance.put(`/board/${id}`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const postReply = async (body: PostCommentBody) => {
  try {
    const { status } = await baseInstance.post('/board/comment', body);
    return status;
  } catch (e) {
    console.log(e);
  }
};
