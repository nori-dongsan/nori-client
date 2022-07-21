import styled from '@emotion/styled';
import { signIn, getSession } from 'next-auth/react';
import Link from 'next/link';
import { loginUser } from '../core/api/user';
import { PostLoginBody } from '../types/user';
import { useEffect, useState } from 'react';
import LocalStorage from '../core/localStorage';
import Router from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  IcLoginNori,
  IcSignupLogo,
  IcNaverBtn,
  IcGoogleBtn,
  IcKakaoBtn,
} from '../public/assets/icons';
import { userInfoState } from '../core/atom';

export default function login({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  useResetRecoilState(userInfoState);
  useEffect(() => {
    const handleLogin = async () => {
      if (data.session?.user) {
        const userLoginData = {
          snsId: data.session?.user.email,
          provider: userInfo.provider,
          email: data.session?.user.email,
        } as PostLoginBody;

        const login = await loginUser(userLoginData);
        console.log(login);
        if (!login) {
          setUserInfo(userLoginData);
        }
      }
    };
    if (userInfo.provider !== '') handleLogin();
  }, [data.session]);

  useEffect(() => {
    // if (!userInfo.isSignup && LocalStorage.getItem('accessToken'))
    //   Router.push('/signup');
  }, []);

  return (
    <StLoginWrapper>
      <StContentWrapper>
        <StIcLoginNori />
        <IcSignupLogo />
        <StSubContentWrapper>
          <div>다양한 장난감 정보를 한눈에!</div>
          <div>우리 아이 장난감 대여 비교 플랫폼</div>
        </StSubContentWrapper>

        <StTextWrapper>
          <span>SNS 계정으로 간편 로그인 &nbsp;/&nbsp;</span>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </StTextWrapper>

        <IcKakaoBtn
          style={{ marginTop: '1.1rem' }}
          onClick={() => {
            signIn('kakao');
            setUserInfo({ provider: 'kakao' });
          }}
        />

        <IcGoogleBtn
          style={{ marginTop: '1.1rem' }}
          onClick={() => {
            signIn('google');
            setUserInfo({ provider: 'google' });
          }}
        />
        <IcNaverBtn
          style={{ marginTop: '1.1rem' }}
          onClick={() => {
            signIn('naver');
            setUserInfo({ provider: 'naver' });
          }}
        />
      </StContentWrapper>
    </StLoginWrapper>
  );
}
const StLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  padding-top: 15.2rem;
  background: url('/assets/icons/loginBackground.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;

const StContentWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 39.4rem;
  height: 54.1rem;

  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
`;
const StIcLoginNori = styled(IcLoginNori)`
  position: absolute;
  top: -5rem;
  left: 14.2rem;
`;

const StSubContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 1.9rem 0 6.9rem 0;

  ${({ theme }) => theme.fonts.t4_18_regular_150};
`;
const StTextWrapper = styled.article`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.fonts.b4_15_regular_146};
  color: #707070;
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  return {
    props: {
      data: { session },
    },
  };
};
