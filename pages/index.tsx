import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className="w-screen h-screen flex">
      <Head>
        <title>Flashybolt</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
    </main>
  )
}

export default Home
