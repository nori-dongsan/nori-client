import LocalStorage from '../localStorage';
import { baseInstance } from '../axios';
import {
  PostLoginBody,
  PostSignUpBody,
  ResponseLoginDto,
} from '../../types/user';

export const loginUser = async (userLoginData: PostLoginBody) => {
  const data = (await baseInstance.post(
    '/auth/login',
    userLoginData,
  )) as ResponseLoginDto;

  if (data) {
    LocalStorage.setUserSession(data.data.accessToken, data.data.refreshToken);
  }
  return data.data.isSignup;
};
export const getRefreshToken = () => {
  return baseInstance.get('/auth/refresh');
};
export const putSignup = (signUpBody: PostSignUpBody) => {
  return baseInstance.put('/auth/signup', signUpBody);
};
