export interface ResponseDto {
  message: string;
  status: number;
  success: boolean;
}

export interface KakaoResParams {
  id: string;
  connected_at: string;
  kakao_account: {
    email: string;
    profile: {
      nickname: string;
    };
  };
}
