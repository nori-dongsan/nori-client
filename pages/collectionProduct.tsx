import styled from '@emotion/styled';
import { useRouter } from 'next/router';
export default function collectionProduct() {
  const { query } = useRouter();
  const { collection } = query;

  console.log(collection);
  return <div></div>;
}
