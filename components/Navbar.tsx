import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="h-20 w-screen bg-white flex items-center justify-between px-8 py-2 shadow-sm">
      <div className="flex items-center justify-center">
        <div className="ml-2 text-3xl text-gray-700 font-thin font-sans flex">
          <a className="">moon</a>
          <a className="text-amber-700">me</a>
          <MoonIcon className="h-6 w-6 text-orange-900 font-thin mt-2"/>
          <a className="text-amber-700">w</a>
        </div>
      </div>
        <div className="self-center flex text-md font-light font-sans tracking-wide">
          <div className="text-gray-700 w-28 text-center flex items-center justify-center">
            About
          </div>
          <div className="text-gray-700 w-28 text-center flex items-center justify-center">
            Contact
          </div>
          <div className="h-8 w-px bg-slate-300 my-auto"></div>
          <div className="text-white text-lg font-semibold w-32 h-12 rounded-xl text-center ml-8 flex items-center justify-evenly bg-gradient-to-br from-stone-900 to-stone-800">
            View pets
          </div>
        </div>
    </nav>
  );
};