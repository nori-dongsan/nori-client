import axios from 'axios';
import LocalStorage from './localStorage';

console.log(process.env.NEXT_PUBLIC_BASE_URL);
const baseInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // client side base instance (default)
// // 로컬스토리지 접근이 가능하고 token이 필요한 api 호출에서 사용
baseInstance.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTY1ODQ3MDAxNiwiZXhwIjoxNjU4NDc3MjE2LCJpc3MiOiJub3JpIn0.sSU_eakT615zSSY3TB4JOTL4GK-3G76llR1F1jrNR_8',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDksImlhdCI6MTY1ODQ3MDAxNiwiZXhwIjoxNjU5Njc5NjE2LCJpc3MiOiJub3JpIn0.G7wP25IRXUd5OfG2yGMp6spnSBbC5DSedVCTF7M-I4Q',
  };

  return { ...config, headers };
});

baseInstance.interceptors.response.use(
  async function (res) {
    console.log('응답');
    console.log(res);
    return res;
  },
  async function (error: { config: any; response: { status: any } }) {
    const { config, response } = error;
    console.log(error);
    const originalRequest = config;
    if (response?.status === 401) {
      // token refresh 요청
      const { data } = await axios.post(
        `/auth/token/refresh`, // token refresh api
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
    return error.response;
  },
);

export { baseInstance };
