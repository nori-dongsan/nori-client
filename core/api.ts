import axios from 'axios';
import useSWR from 'swr';
import { baseInstance } from './axios';

export const getData = (key: string) => {
  return baseInstance.get(key);
};
