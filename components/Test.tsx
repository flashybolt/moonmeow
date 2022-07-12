import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export function Test() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex items-center flex-col max-w-lg rounded-xl p-16 bg-white shadow-xl pt-20 pb-16">
            <img src="../logo.png" alt="moonmeow" />
            <Dialog.Title className="text-md text-gray-900 mt-8 text-sm">
              Make you account
            </Dialog.Title>
            <form className="flex flex-col flex-nowrap items-center gap-5 mt-2 text-gray-900">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
              />
              <input
                onClick={() => setIsSigupOpen(false)}
                type="submit"
                value="Sign Up"
                className="h-12 w-32 mt-2 flex flex-col items-center rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white cursor-pointer"
              />
              <div className="text-sm text-gray-700">
                Already have an account?{" "}
                <a
                  onClick={() => {
                  }}
                  className="underline font-bold decoration-amber-600 decoration-2 cursor-pointer"
                >
                  Login here!
                </a>
              </div>
            </form>
            </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
