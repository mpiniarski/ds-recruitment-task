import '../styles/globals.scss'
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from "components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Dynamic Solutions - recruitment task</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <Header/>
    <Component {...pageProps} />
    </>
}

export default MyApp