import React from "react";
import { Link, useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isLoginPath = pathname === "/login";
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="mb-6 text-center">
          <h1 className="text-5xl tracking-widest">IKIGAI</h1>
          <p className="pb-1 border-b text-lg tracking-wider">
            Rails API 💎 + React ⚛️ + Tailwind 🌊
          </p>
        </div>
        <div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold">
            {isLoginPath
              ? "Sign in to your account"
              : "Sign up for a new account"}
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-600">
            Or{" "}
            <Link
              to={isLoginPath ? "signup" : "login"}
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              {isLoginPath ? "sign up for a new account" : "sign in instead"}
            </Link>
          </p>
        </div>
        {children}
        <div className="mt-6 text-sm leading-5">
          <nav className="flex items-center justify-center">
            <Link
              to="/about"
              className="mr-4 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              About
            </Link>
            <Link
              to="#"
              className="mr-4 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Features
            </Link>
            <Link
              to="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
