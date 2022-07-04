import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db, app } from '../firebase/clientApp'

const Home: NextPage = () => {
  const auth = getAuth(app);

  function addUser(auth, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  addUser(auth, 'wodaguge369@gmail.com', 'banana123456');

  return (
    <main className="w-full flex flex-col">
      <Head>
        <title>Moonmeow</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className="h-168 w-full flex justify-between gap-0">
        <div className="w-1/2 flex">
          <div className="self-center w-full">
           <img src="../cat_mainpage.png" alt="cat_mainpage" className="w-full" />
          </div>
        </div>
        <div className="h-full w-1/2 flex">
          <div className="self-center mt-28 h-1/2 w-full">
            <div className="text-amber-700 font-black text-6xl ml-12 w-2/3">The most efficient way to find your pet.</div>
            <div className="text-gray-700 font-semibold text-2xl ml-12 mt-4 w-2/3">Find your dream soulmate here.</div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tr from-cyan-50 via-blue-50 to-fuchsia-50 absolute h-full w-full -z-10"></div>
      <div className="bg-stone-900 h-44 w-full flex flex-col items-center justify-center text-4xl text-gray-50 font-semibold">
        <div>Our mission - To give all pets a chance to fully live their lives. </div>
        <div className="text-lg mt-2">(And make hoomans worship them)</div>
      </div>
      <div className="h-168 bg-gradient-to-tr from-cyan-50 via-blue-50 to-fuchsia-50 flex flex-col justify-center items-center">
        
      </div>
      <Footer />
    </main>
  )
}

export default Home
