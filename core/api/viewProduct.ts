import { Router } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import useSWR from 'swr';
import { URLFormatOptions } from 'url';
import { ToyData } from '../../types/toy';
import { Response } from '../../types/api';
import { GetViewProduct, ViewProductProps } from '../../types/viewProduct';

import { baseInstance } from '../axios';

export const getViewProductFilter = (filterQuery: string) => {
  const { data, error } = useSWR<Response<GetViewProduct>>(
    encodeURI(`/toy/list?${filterQuery}`),
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    filterData: data?.data.data.filterData,
    result: data?.data.data.result,
    error,
  };
};
export const getBannerViewProductFilter = (
  category: number,
  filterQuery: string,
) => {
  const { data, error } = useSWR<Response<GetViewProduct>>(
    encodeURI(`/toy/list/${category}?${filterQuery}`),
    baseInstance.get,
    {
      errorRetryCount: 3,
    },
  );
  return {
    filterData: data?.data.data.filterData,
    result: data?.data.data.result,
    error,
  };
};
export const getBannerViewProduct = (category: number) => {
  return baseInstance.get(`/toy/list/${category}`);
};
export const getViewProduct = () => {
  return baseInstance.get(`/toy/list`);
};
