import axios from 'axios';
import LocalStorage from './localStorage';
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const baseInstance = axios.create({
  baseURL: `/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
// // client side base instance (default)
// // 로컬스토리지 접근이 가능하고 token이 필요한 api 호출에서 사용
baseInstance.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    accessToken: LocalStorage.getItem('accessToken'),
    refreshToken: LocalStorage.getItem('refreshToken'),
  };

  return { ...config, headers };
});

baseInstance.interceptors.response.use((response) => {
  if (response.data) return response.data;

  async (error: { config: any; response: { status: any } }) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;
    console.log(originalRequest);
    if (status === 409) {
      // token refresh 요청
      const { data } = await axios.post(
        `/auth/refresh`, // token refresh api
        {},
        {
          headers: {
            accessToken: LocalStorage.getItem('accessToken'),
            refreshToken: LocalStorage.getItem('refreshToken'),
          },
        },
      );

      const accessToken = data.data.accessToken;
      const refreshToken = data.data.refreshToken;

      LocalStorage.setItem('accessToken', accessToken);
      LocalStorage.setItem('refreshToken', refreshToken);

      originalRequest.headers = {
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
      return axios(originalRequest);
    }
    return Promise.reject(error);
  };
});
export { baseInstance };
