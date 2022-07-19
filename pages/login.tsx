import {
  ImgKakaoLogo,
  ImgGoogleLogo,
  ImgNaverLogo,
} from '../public/assets/images';
import Image from 'next/image';
import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IcLoginLine } from '../public/assets/icons';
import Link from 'next/link';
import { loginUser } from '../core/api/user';
import { PostLoginBody } from '../types/user';
import { useEffect, useState } from 'react';
import LocalStorage from '../core/localStorage';
import Router from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userInfoState } from '../core/atom';

export default function login() {
  const { data: session, status } = useSession();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const resetList = useResetRecoilState(userInfoState);

  const handleLogin = async (social: string) => {
    console.log(social);
    console.log(session);
    if (session?.user) {
      const userLoginData = {
        snsId: session?.user.email,
        provider: social,
        email: session?.user.email,
      } as PostLoginBody;
      const login = await loginUser(userLoginData);
      // if (login) {
      //   setUserInfo(userLoginData);
      // }
      console.log(userLoginData);
    }
  };

  useEffect(() => {
    // if (LocalStorage.getItem('email')) {
    // Router.push('/signup');
    // }
  }, []);

  return (
    <StLoginWrapper>
      <StLoginTitle>로그인</StLoginTitle>
      <IcLoginLine />
      <StContentWrapper>
        <StContent>다양한 장난감 정보를 한눈에!</StContent>
        <StContent>우리 아이 장난감 대여 비교 플랫폼</StContent>
      </StContentWrapper>
      <StTextWrapper>
        <StContentSpan>SNS 계정으로 간편 로그인 /</StContentSpan>
        <StLoginLink href="/signup">
          <StSignUpA>회원가입</StSignUpA>
        </StLoginLink>
      </StTextWrapper>
      <StSocialLoginWrapper>
        <Image
          src={ImgNaverLogo}
          width={56}
          height={56}
          style={{ padding: '1.5rem' }}
          onClick={() => {
            // signIn('naver');
            handleLogin('naver');
          }}
        />
        <Image
          src={ImgKakaoLogo}
          width={56}
          height={56}
          style={{ padding: '1.5rem' }}
          onClick={() => {
            signIn('kakao', { redirect: false });
            handleLogin('kakao');
          }}
        />

        <Image
          src={ImgGoogleLogo}
          width={56}
          height={56}
          style={{ padding: '1.5rem' }}
          onClick={() => {
            // signIn('google');
            handleLogin('google');
          }}
        />
      </StSocialLoginWrapper>

      <IcLoginLine />
    </StLoginWrapper>
  );
}
const StLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-top: 4.6rem;
  padding-bottom: 18.8rem;
`;
const StLoginTitle = styled.h1`
  padding-bottom: 6.1rem;

  ${({ theme }) => theme.fonts.t1_28_medium_150}
`;
const StSocialLoginWrapper = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 26rem;
  padding-bottom: 7.4rem;
`;
const StContentWrapper = styled.div`
  padding-top: 10.2rem;
`;
const StContent = styled.div`
  color: #707070;
  ${({ theme }) => theme.fonts.b2_18_regular_130};
`;
const StContentSpan = styled.span`
  color: #707070;
  ${({ theme }) => theme.fonts.b2_18_regular_130};
`;
const StTextWrapper = styled.article`
  display: flex;

  padding-top: 9.3rem;
  padding-bottom: 2.1rem;
`;
const StLoginLink = styled(Link)`
  display: inline;
`;
const StSignUpA = styled.a`
  display: inline;

  color: #707070;
  ${({ theme }) => theme.fonts.b2_18_regular_130};
  cursor: pointer;
`;
