import axios from 'axios';
import LocalStorage from './localStorage';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
    Authorization: LocalStorage.getItem('nori'),
  };

  return { ...config, headers };
});

baseInstance.interceptors.response.use((response) => {
  return response.data;
});
export { baseInstance };
