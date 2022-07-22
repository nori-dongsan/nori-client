import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Footer, Header, WriteHeader } from '../components/common';
import GlobalStyle, { resetStyle } from '../styles/globalStyle';
import theme from '../styles/theme';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  return (
    <RecoilRoot>
      <Head>
        <title>nori</title>
        <link rel="icon" href="/assets/icons/favicon.svg" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta
          name="description"
          content="다양한 장난감 정보를 한 눈에! 우리 아이 장난감 대여 비교 플랫폼, nori"
        />
        <meta
          name="keywords"
          content="다양한 장난감 정보를 한 눈에! 우리 아이 장난감 대여 비교 플랫폼, nori"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nori" />
        <meta property="og:url" content="https://www.with-nori.com/" />
        <meta property="og:site_name" content="nori" />
        <meta
          property="og:description"
          content="다양한 장난감 정보를 한 눈에! 우리 아이 장난감 대여 비교 플랫폼, nori"
        />
        <meta
          property="og:image"
          content="https://nori-image.s3.ap-northeast-2.amazonaws.com/thumbnail.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="nori" />
        <meta
          name="twitter:description"
          content="다양한 장난감 정보를 한 눈에! 우리 아이 장난감 대여 비교 플랫폼, nori"
        />
        <meta
          name="twitter:image"
          content="https://nori-image.s3.ap-northeast-2.amazonaws.com/twitter-thumbnail.png"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={GlobalStyle} />
        {pathname.includes('/write') ? (
          <WriteHeader />
        ) : (
          pathname !== '/login' && pathname !== '/signup' && <Header />
        )}
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
        {pathname !== '/login' && pathname !== '/signup' && <Footer />}
      </ThemeProvider>
    </RecoilRoot>
  );
}
