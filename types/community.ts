export interface ImgData {
  id: number;
  src: string;
}
// 댓글
export interface ReplyData {
  userNickname?: string;
  content: string;
  createdAt: string;
}
// 커뮤니티 데이터
export interface CommunityData {
  id: string;
  category: string;
  title: string;
  content: string;
  userNickname?: string;
  replyCount?: number;
  createdAt?: string;
  image?: string;
  imageList?: string[];
  replyList?: ReplyData[];
}
// 커뮤니티 게시글 작성 post body
export interface PostCommunityBody {
  category: string;
  title: string;
  content: string;
  imageList?: string[];
}
// 커뮤니티 댓글
export interface PostCommentBody {
  boardId: string;
  content: string;
}

export interface GetCommunityList {
  communityList: { data: CommunityData[] };
  isLoading: boolean;
  isError: string;
}
