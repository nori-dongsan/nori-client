namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string;
    KAKAO_ID: string;
    KAKAO_SECRET: string;

    NEXTAUTH_URL: string;
    SECRET: string;

    KAKAO_API_KEY: string;
    KAKAO_SECRECT: string;

    NAVER_ID: string;
    NAVER_SECRET: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
