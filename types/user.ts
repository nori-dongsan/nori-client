export interface UserData {
  id: string;
  sns_id: string;
  provider: string;
  nickname: string;
  email: string;
}
export interface PostSignUpBody {
  nickname: string;
}
