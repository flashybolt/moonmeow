import Head from 'next/head'
import Script from 'next/script'

export default function Profile() {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/f5f8228ccd.js" crossOrigin="anonymous" async></script>
        <title>Flashybolty</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="w-screen h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-2/3 h-2/3">
          <div className="text-5xl text-white font-medium font-mono">
            Hey, I&apos;m <a className="font-sans underline decoration-rose-600 font-bold decoration-8 text-6xl">Flashybolt45!</a>
          </div>
        </div>
      </main>
    </>
  );
}
