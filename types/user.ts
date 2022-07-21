export interface UserData {
  id: string;
  snsId: string;
  provider: string;
  nickname: string;
  email: string;
}

export interface PostSignUpBody {
  nickname: string;
}

export interface PostLoginBody {
  snsId?: string;
  provider: string;
  email?: string;
  isSignup?: boolean;
}
export interface ResponseLoginDto {
  data: {
    accessToken: string;
    refreshToken: string;
    isSignup: boolean;
  };
}
