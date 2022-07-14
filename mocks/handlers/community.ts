import { rest } from 'msw';
import { communityMockData } from '../data/communityMockData';
import {
  CommunityData,
  PostCommentBody,
  PostCommunityBody,
} from '../../types/community';
// 커뮤니티 게시글 작성
export const postCommunity = rest.post('/board', (req, res, ctx) => {
  const { category, title, content, imageList } = req.body as PostCommunityBody;
  const addId = communityMockData.length + 1 + '';

  communityMockData.push({
    id: addId,
    category: category,
    title: title,
    content: content,
    imageList: imageList,
  });
  return res(ctx.json(communityMockData));
});
// 커뮤니티 게시글 수정
export const putCommunity = rest.put('/board/:boardId', (req, res, ctx) => {
  const { boardId } = req.params;
});

// 커뮤니티 게시글 상세조회
export const getCommunityDetail = rest.get(
  '/board/:boardId',
  (req, res, ctx) => {
    const { boardId } = req.params;

    const communityDetail = communityMockData.filter(
      (community) => community.id === boardId,
    );

    return res(ctx.json(communityDetail));
  },
);
// 커뮤니티 게시글 리스트 조회
export const getCommunityList = rest.get('/board', (req, res, ctx) => {
  return res(ctx.json(communityMockData));
});
// 커뮤니티 댓글 작성
export const postComment = rest.post('/board/comment', (req, res, ctx) => {
  const { boardId, content } = req.body as PostCommentBody;

  const currentComment: CommunityData[] = communityMockData.filter(
    (community) => community.id === boardId,
  );
  currentComment[0].replyList?.push({ content: content });
  communityMockData[Number(boardId) - 1].replyList =
    currentComment[0].replyList;

  return res(ctx.json(communityMockData));
});
// 커뮤니티 게시글 삭제
export const deleteCommunity = rest.delete(
  '/board/:boardId',
  (req, res, ctx) => {
    const { boardId } = req.params;

    const newCommunityMockData = communityMockData.filter(
      (community) => community.id !== boardId,
    );

    return res(ctx.json(newCommunityMockData));
  },
);