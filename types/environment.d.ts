namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    // ...
    KAKAO_ID: string;
    KAKAO_SECRET: string;

    NEXTAUTH_UR: string;
    SECRET: string;

    KAKAO_API_KEY: string;
    KAKAO_SECRECT: string;

    NAVER_ID: string;
    NAVER_SECRET: string;

    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
  }
}
