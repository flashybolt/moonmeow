import { LoginIcon, LogoutIcon } from "@heroicons/react/solid";
import { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { db, app } from "../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const Navbar = () => {
  let [isLoginOpen, setLoginIsOpen] = useState(false);
  let [isSignupOpen, setSignupIsOpen] = useState(false);
  let [isLogoutOpen, setLogoutIsOpen] = useState(false)

  const closeLoginModal = () => {
    setLoginIsOpen(false);
  };
  const openLoginModal = () => {
    setLoginIsOpen(true);
  };
  const closeSignupModal = () => {
    setSignupIsOpen(false);
  };
  const openSignupModal = () => {
    setSignupIsOpen(true);
  };
  const closeLogoutModal = () => {
    setLogoutIsOpen(false);
    router.push("/")
  };
  const openLogoutModal = () => {
    setLogoutIsOpen(true);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const loginForm = (event) => {
    event.preventDefault();
    signIn(auth, loginEmail, loginPassword);
  };

  const signupForm = (event) => {
    event.preventDefault();
    addUser(auth, signupEmail, signupPassword);
  };

  const router = useRouter();
  const auth = getAuth(app);

  const signIn = (auth, email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/cutecats");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const addUser = (auth, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push("/cutecats");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const NavIcons = (props) => {
    if (props.loggedin == "yes") {
      return (
        <div className="w-36 h-12 flex justify-center items-center bg-stone-900 rounded-xl cursor-pointer hover:bg-stone-800" onClick={signout}>
          <LogoutIcon className="w-6 h-6 text-white" />
          <div className="text-lg text-white ml-3 font-semibold">Logout</div>
        </div>
      );
    } else {
      return (
        <div
          onClick={openLoginModal}
          className="w-36 h-12 flex justify-center items-center bg-stone-900 rounded-xl cursor-pointer hover:bg-stone-800"
        >
          <LoginIcon className="w-6 h-6 text-white" />
          <div className="text-lg text-white ml-3 font-semibold">Login</div>
        </div>
      );
    }
  };

  const detectUser = () => {
    const user = auth.currentUser;
    if (user) {
      return "yes";
    } else {
      return "no";
    }
  };

  const signout = () => {
    auth.signOut();
    openLogoutModal();
  }

  return (
    <nav className="h-20 w-full flex items-center justify-between px-8 pr-6 border-b border-slate-200">
      <div className="flex items-center justify-center">
        <img
          src="../logo.png"
          alt="moonmeow"
          className="mt-2"
        />
      </div>
      <NavIcons loggedin={detectUser()} />
      <Transition show={isLogoutOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLogoutModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-12 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-gray-900"
                  >
                    Logout successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Successfully logged out. Sign in again on the home page.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeLogoutModal}
                    >
                      Return to Home
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition show={isLoginOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
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
                    Login to your account
                  </Dialog.Title>
                  <form
                    className="flex flex-col flex-nowrap items-center gap-5 mt-2 text-gray-900"
                    onSubmit={loginForm}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <input
                      type="submit"
                      value="Login"
                      className="h-12 w-32 mt-2 flex flex-col items-center rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white cursor-pointer"
                    />
                    <div className="text-sm text-gray-700">
                      Don&apos;t have an account?
                      <a
                        onClick={() => {
                          closeLoginModal();
                          setTimeout(openSignupModal(), 600);
                        }}
                        className="underline font-bold decoration-amber-600 decoration-2 cursor-pointer"
                      >
                        Make one!
                      </a>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition show={isSignupOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeSignupModal}>
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
                  <form
                    className="flex flex-col flex-nowrap items-center gap-5 mt-2 text-gray-900"
                    onSubmit={signupForm}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="h-12 w-72 px-4 placeholder-slate-400 rounded-lg focus:outline-none border border-slate-300"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    <input
                      onClick={closeSignupModal}
                      type="submit"
                      value="Sign Up"
                      className="h-12 w-32 mt-2 flex flex-col items-center rounded-xl bg-gradient-to-br from-stone-900 to-stone-800 text-white cursor-pointer"
                    />
                    <div className="text-sm text-gray-700">
                      Already have an account?{" "}
                      <a
                        onClick={() => {
                          closeSignupModal();
                          setTimeout(openLoginModal(), 600);
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
    </nav>
  );
};
