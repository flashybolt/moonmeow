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
      <div className="text-center p-6">Hello There.</div>
      <Footer />
    </main>
  );
};

export default CuteCats;
