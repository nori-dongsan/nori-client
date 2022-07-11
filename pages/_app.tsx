import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Header } from '../components/common';

import GlobalStyle, { resetStyle } from '../styles/globalStyle';
import theme from '../styles/theme';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={GlobalStyle} />
        <Header />
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
