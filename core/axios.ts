import axios from 'axios';
import LocalStorage from './localStorage';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const baseInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
