import {
  ImgKakaoLogo,
  ImgGoogleLogo,
  ImgNaverLogo,
} from '../public/assets/images';
import Image from 'next/image';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function login() {
  const { data, status } = useSession();
  console.log(data?.user);
  return (
    <StLoginWrapper>
      <Image
        src={ImgNaverLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={() => signIn('naver')}
      />
      <Image
        src={ImgKakaoLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={() => signIn('kakao')}
      />

      <Image
        src={ImgGoogleLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={() => signIn('google')}
      />
    </StLoginWrapper>
  );
}
const StLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
