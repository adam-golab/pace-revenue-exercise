import { AppProps } from 'next/app';

import { GlobalStyles } from '../src/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
