
import LocalStorage from '../localStorage';
import { baseInstance } from '../axios';
import { PostLoginBody } from '../../types/user';

export const loginUser = async (userLoginData: PostLoginBody) => {
  const data = await baseInstance.post('/auth/login', userLoginData);

  if (data)
    LocalStorage.setUserSession(
      data.data.accessToken,
      data.data.refreshToken,
      userLoginData.email,
    );

  return { data };
};
export const getRefreshToken = () => {
  return baseInstance.get('/auth/refresh');
};
