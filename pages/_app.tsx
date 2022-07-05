import { Global, ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import GlobalStyle, { resetStyle } from '../styles/globalStyle';
import theme from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={resetStyle} />
        <Global styles={GlobalStyle} />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
