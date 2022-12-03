import Router from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { MainToyData, ToyData } from '../types/toy';
import { ViewProductProps } from '../types/viewProduct';

export function checkNickname(value: string) {
  const regex = /^[가-힣|a-z|A-Z|0-9|]{2,10}$/;
  return regex.test(value);
}

export function divisionToyData(array: ToyData[]) {
  const count =
    Math.floor(array.length / 4) + (Math.floor(array.length % 4) > 0 ? 1 : 0);
  const newArray = [];

  console.log(count);

  for (let i = 0; i < count; i += 1) {
    newArray.push(array.splice(0, 4));
  }
  return newArray;
}

export function divisionMainToyData(array: MainToyData[]) {
  const count =
    Math.floor(array.length / 4) + (Math.floor(array.length % 4) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i < count; i += 1) {
    newArray.push(array.splice(0, 4));
  }
  return newArray;
}

export function chQuery(chkQuery: ViewProductProps) {
  let queryString = '';
  for (const [key, value] of Object.entries(chkQuery)) {
    if (value !== '') queryString += `${key}=${value}&`;
  }
  return queryString;
}
