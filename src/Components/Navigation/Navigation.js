import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to="/">
                <span className="sr-only">Home</span>
                <img
                  className="w-24"
                  src="images/logo.png"
                  alt="website logo"
                />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav
                className={toggle ? "block absolute top-16 left-0 w-full bg-white" : "hidden md:block"}
                aria-labelledby="header-navigation"
              >
                <h2 className="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul className="flex flex-col items-start pl-4 md:pl-0 md:flex-row md:items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/products"
                    >
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 transition hover:text-gray-700/75"
                      to="/cart"
                    >
                      <div className="bg-yellow-400 px-3 py-1 rounded-full flex items-center">
                        <span className="mr-1">10</span>
                        <span className="text-white">cart</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="block md:hidden">
                  <button onClick={() => setToggle(!toggle)} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
