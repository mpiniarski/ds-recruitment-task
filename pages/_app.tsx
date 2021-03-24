import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import Header from "components/header";
import Head from "next/head";
import Footer from "components/footer";
import {WithModal} from "components/modal";

function MyApp({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>Dynamic Solutions - recruitment task</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <WithModal>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </WithModal>
  </>
}

export default MyApp