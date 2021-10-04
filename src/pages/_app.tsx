import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leandro Reis - Portfolio</title>
        {/* <link rel="shortcut icon" href="/img/icon.png" /> */}
        {/* <link rel="apple-touch-icon" href="/img/icon.png" /> */}
        <meta
          name="description"
          content="A portfolio created with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default App;
