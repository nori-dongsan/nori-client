import LocalStorage from '../localStorage';
import { baseInstance } from '../axios';
import { PostLoginBody, SignUpBody, ResponseLoginDto } from '../../types/user';

export const loginUser = async (userLoginData: PostLoginBody) => {
  const data = (await baseInstance.post(
    '/auth/login',
    userLoginData,
  )) as ResponseLoginDto;

  if (data.status === 200) {
    LocalStorage.setUserSession(
      data.data.data.accessToken,
      data.data.data.refreshToken,
    );
    return data.data.data.isSignup;
  }
};
export const getRefreshToken = () => {
  return baseInstance.get('/auth/refresh');
};
export const postNickname = (nicknameBody: SignUpBody) => {
  return baseInstance.post('/auth/nickname', nicknameBody);
};
export const putSignup = (signUpBody: SignUpBody) => {
  return baseInstance.put('/auth/signup', signUpBody);
};
