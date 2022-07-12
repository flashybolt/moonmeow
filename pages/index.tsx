import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Test } from "../components/Test";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from 'react-router-dom';

const Home: NextPage = () => {
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
            <img
              src="../cat_mainpage.png"
              alt="cat_mainpage"
              className="w-full"
            />
          </div>
        </div>
        <div className="h-full w-1/2 flex">
          <div className="self-center mt-28 h-1/2 w-full">
            <div className="text-amber-700 font-black text-6xl ml-12 w-2/3">
              Find your next furry friend.
            </div>
            <div className="text-gray-700 text-xl ml-12 mt-4 w-3/5">
              It's easier to find a pet with moonmeow, now more than ever!
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-900 h-44 w-full flex flex-col items-center justify-center text-4xl text-gray-50 font-semibold">
        <div className="text-center">
          Our mission - To give all pets a chance to fully live their lives.
        </div>
        <div className="text-center text-lg mt-2">(And make hoomans worship them)</div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
