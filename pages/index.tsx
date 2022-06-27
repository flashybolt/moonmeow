import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen flex flex-wrap">
      <Head>
        <title>Moonmeow</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" async></Script>
      </Head>
      <Navbar />
      <div className="h-168 w-screen"></div>
    </main>
  )
}

export default Home
