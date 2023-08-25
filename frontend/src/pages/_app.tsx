import Layout from 'components/Layout'
import { CookieProvider } from 'context/CookieContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vial - Calculator</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple calculator with basic arithmetic functions"
        />
      </Head>
      <GlobalStyles />
      <CookieProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CookieProvider>
    </>
  )
}

export default App
