import { HeartIcon } from '@heroicons/react/solid'

export const Footer = () => {
  return (
    <footer className="h-20 w-full flex justify-center items-center bg-gray-800 font-mono text-gray-400">
      Made with&nbsp;
      <HeartIcon className="h-6 w-6 text-red-600"/>
      &nbsp;using next.js
    </footer>
  );
};