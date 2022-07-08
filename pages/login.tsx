import React, { useEffect } from 'react';
import { ImgKakaoLogin } from '../public/assets/images';
import Image from 'next/image';
import Router from 'next/router';
import { KakaoResParams } from '../types/api';

export default function login() {
  const handleLogin = () => {
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

  useEffect(() => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized())
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  }, []);

  return (
    <div>
      <Image src={ImgKakaoLogin} onClick={handleLogin} />
    </div>
  );
}
