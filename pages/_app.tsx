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
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={GlobalStyle} />
        {router.pathname === '/write' ? (
          <WriteHeader />
        ) : (
          router.pathname !== '/login' &&
          router.pathname !== '/signup' && <Header />
        )}
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
        {router.pathname !== '/login' && router.pathname !== '/signup' && (
          <Footer />
        )}
      </ThemeProvider>
    </RecoilRoot>
  );
}
