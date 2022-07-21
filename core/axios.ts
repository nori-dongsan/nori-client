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
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTY1ODM5MjA1NCwiZXhwIjoxNjU4Mzk5MjU0LCJpc3MiOiJub3JpIn0.-4zFiA6OVE5L86D0LWyEkyKf7RKvm7qlOG5NWCXcSYM',
    refreshToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImlhdCI6MTY1ODM4NDEwMCwiZXhwIjoxNjU5NTkzNzAwLCJpc3MiOiJub3JpIn0.AeuhSmM1ZqItojeM3O0SwrELog-Qfq91r_ii0EMgPig',
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
