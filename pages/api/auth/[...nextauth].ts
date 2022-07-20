import NextAuth, { Awaitable, Session, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
type ExtendedUserType = User & { username?: string; uid?: string };
export default NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_API_KEY,
      clientSecret: process.env.KAKAO_SECRECT,
    }),
    NaverProvider({
      clientId: process.env.NAVER_ID,
      clientSecret: process.env.NAVER_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,

  session: {
    strategy: 'jwt',
  },
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log(user);

  //     return user;
  //   },
  // },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
});
