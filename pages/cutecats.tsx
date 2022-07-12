import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Head from "next/head";

const CuteCats: NextPage = () => {
  return (
    <main className="w-full flex flex-col">
      <Head>
        <title>Moonmeow - Cute Cats</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className="text-center p-6">Now that you have logged in, here is cute cat photo</div>
      <img src="https://i.pinimg.com/originals/bd/59/14/bd5914df69a865b3f3169a36c8507005.jpg" alt="cutecat" />
      <Footer />
    </main>
  );
};

export default CuteCats;
