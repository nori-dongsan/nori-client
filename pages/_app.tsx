import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Footer, Header, WriteHeader } from '../components/common';
import GlobalStyle, { resetStyle } from '../styles/globalStyle';
import theme from '../styles/theme';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();

  // 안녕 진짜 너무 좋다 갈축 최고
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={GlobalStyle} />
        {pathname === '/write' ? (
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
