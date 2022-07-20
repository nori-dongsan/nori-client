import useSWR from 'swr';
import { PostCommentBody, PostCommunityBody } from '../../types/community';
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

export const postCommunity = async (body: PostCommunityBody) => {
  try {
    const { data } = await baseInstance.post('/board', body);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const getCommunityDetail = async (id: string) => {
  try {
    // const { data } = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts/${id}`,
    // );
    const { data } = await baseInstance.get(`/board/${id}`);
    return data;
  } catch (e) {
    console.log(e);
  }
};
export const deleteCommunity = async (id: string) => {
  try {
    const { status } = await baseInstance.delete(`/board/${id}`);
    return status;
  } catch (e) {
    console.log(e);
  }
};

export const postReply = async (body: PostCommentBody) => {
  try {
    const { data } = await baseInstance.post('/board/comment', body);
    return data;
  } catch (e) {
    console.log(e);
  }
};
