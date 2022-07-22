// 댓글
export interface ReplyData {
  author: boolean;
  userNickname?: string;
  content: string;
  createAt: string;
}
// 커뮤니티 데이터
export interface CommunityData {
  id: string;
  author: boolean;
  category: string;
  title: string;
  content: string;
  userNickname: string;
  replyCount: number;
  createdAt: string;
  image?: string;
  imageList: string[];
  replyList: ReplyData[];
}
// 커뮤니티 게시글 작성 post body
export interface PostCommunityBody {
  category: string;
  title: string;
  content: string;
  imageList?: FormData;
}
// 커뮤니티 댓글
export interface PostCommentBody {
  boardId?: string;
  content: string;
}

export interface GetCommunityList {
  communityList: CommunityData[];
  isLoading: boolean;
  isError: string;
}
// 커뮤니티 글 작성 이미지 데이터
export interface ImgData {
  id: number;
  src: string;
  file: File;
}
