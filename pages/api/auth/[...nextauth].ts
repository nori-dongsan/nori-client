import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: `${process.env.NEXT_PUBLIC_KAKAO_API_KEY}`,
      clientSecret: `${process.env.NEXT_PUBLIC_KAKAO_SECRECT}`,
    }),
    NaverProvider({
      clientId: `${process.env.NEXT_PUBLIC_NAVER_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_NAVER_SECRET}`,
    }),
    GoogleProvider({
      clientId: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`,
      clientSecret: `${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}`,
    }),
  ],
});
