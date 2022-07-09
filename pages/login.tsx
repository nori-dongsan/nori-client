import { useEffect, useRef, AnchorHTMLAttributes } from 'react';
import { IcKakao } from '../public/assets/icons';
import {
  ImgKakaoLogo,
  ImgGoogleLogo,
  ImgNaverLogo,
} from '../public/assets/images';
import Image from 'next/image';
import Router from 'next/router';
import styled from '@emotion/styled';
import { KakaoResParams } from '../types/api';

export default function login() {
  const naverLoginRef = useRef<HTMLDivElement>(null);

  const handleKakaoLogin = () => {
    const kakao = (window as any).Kakao;
    kakao.Auth.login({
      success: () => {
        kakao.API.request({
          url: '/v2/user/me', // 사용자 정보 가져오기
          success: (res: KakaoResParams) => {
            // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
            console.log(res);
            Router.push({
              pathname: '/main',
              query: { userId: res.id },
            });
          },
          fail: (error: any) => {
            console.log(error);
          },
        });
      },
      fail: (error: any) => {
        console.log(error);
      },
    });
  };

  const naverLogin = () => {
    const naver = (window as any).naver;
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_ID,
      callbackUrl: 'http://localhost:3000/login', // Callback URL
      isPopup: false /* 팝업을 통한 연동처리 여부, true 면 팝업 */,
      loginButton: {
        color: 'green',
        type: 1,
        height: 47,
      } /* 로그인 버튼의 타입을 지정 */,
    });
    naverLogin.init();
    const hash = Router.asPath.split('#')[1]; // 네이버 로그인을 통해 전달받은 hash 값
    console.log(hash);
    if (hash) {
      const token = hash.split('=')[1].split('&')[0]; // token값 확인
      naverLogin.getLoginStatus((status: any) => {
        if (status) {
          // 로그인 상태 값이 있을 경우
          console.log(naverLogin.user); // 사용자 정보 조회
          // /naver 페이지로 token값과 함께 전달 (서비스할 땐 token 전달을 하지 않고 상태 관리를 사용하는 것이 바람직할 것으로 보임)
          Router.push({
            pathname: '/naver',
            query: {
              token: token,
            },
          });
        }
      });
    }
  };
  const handleNaverLogin = () => {
    if (naverLoginRef.current) {
      naverLoginRef.current.firstChild?.click();
    }
  };
  useEffect(() => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized())
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);

    naverLogin();
  }, []);

  return (
    <StLoginWrapper>
      <Image
        id="naverIdLogin"
        src={ImgNaverLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={handleNaverLogin}
      />
      <Image
        src={ImgKakaoLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
        onClick={handleKakaoLogin}
      />

      <StNaverLoginDiv ref={naverLoginRef} id="naverIdLogin"></StNaverLoginDiv>
      <Image
        src={ImgGoogleLogo}
        width={56}
        height={56}
        style={{ padding: '1.5rem' }}
      />
      <a></a>
    </StLoginWrapper>
  );
}
const StNaverLoginDiv = styled.div`
  display: none;
`;

const StLoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
