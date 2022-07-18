import styled from '@emotion/styled';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { loginUser } from '../core/api/user';
import { PostLoginBody } from '../types/user';
import { useEffect, useState } from 'react';
import LocalStorage from '../core/localStorage';
import Router from 'next/router';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userInfoState } from '../core/atom';
import {
  IcLoginNori,
  IcSignupLogo,
  IcNaverBtn,
  IcGoogleBtn,
  IcKakaoBtn,
} from '../public/assets/icons';

export default function login() {
  const { data, status } = useSession();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const resetList = useResetRecoilState(userInfoState);

  const handleLogin = async (social: string) => {
    if (data?.user) {
      const userLoginData = {
        snsId: data?.user.email,
        provider: social,
        email: data?.user.email,
      } as PostLoginBody;
      const login = await loginUser(userLoginData);
      // if (login) {
      //   setUserInfo(userLoginData);
      // }
    }
  };

  useEffect(() => {
    // if (LocalStorage.getItem('email')) {
    // Router.push('/signup');
    // }
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
          <StContentSpan>SNS 계정으로 간편 로그인 /</StContentSpan>
          <StLoginLink href="/signup">
            <StSignUpA>회원가입</StSignUpA>
          </StLoginLink>
        </StTextWrapper>

        <IcGoogleBtn
          style={{ marginTop: '1.9rem' }}
          onClick={() => {
            // signIn('kakao');
            handleLogin('kakao');
          }}
        />

        <IcKakaoBtn
          style={{ marginTop: '1.1rem' }}
          onClick={() => {
            // signIn('google');
            handleLogin('google');
          }}
        />
        <IcNaverBtn
          style={{ marginTop: '1.1rem' }}
          onClick={() => {
            // signIn('naver');
            handleLogin('naver');
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

  height: 100%;
  padding-top: 15.2rem;
  background: ${({ theme }) => theme.colors.mainGreen};
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
const StContentSpan = styled.span`
  color: #707070;
  ${({ theme }) => theme.fonts.b2_18_regular_130};
`;
const StTextWrapper = styled.article`
  display: flex;
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
