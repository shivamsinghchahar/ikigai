import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import { AuthLayout } from "layouts";
import { Toast } from "components/ui";

import { login } from "apis/auth";

import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const onSubmit = async loginData => {
    try {
      setLoading(true);
      const { data } = await login({
        user: {
          ...loginData,
        },
      });
      authDispatch({ type: "LOGIN", payload: data });
      userDispatch({ type: "SET_USER", payload: data });
      Toast.success("Successfully logged in 🎉");
    } catch (error) {
      const message = error.response?.data?.error;
      message && Toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="rounded-md shadow-sm">
          <div>
            <input
              aria-label="Email address"
              aria-required="true"
              name="email"
              type="email"
              autoFocus
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email address"
              ref={register({ required: true })}
            />
          </div>
          <div className="-mt-px">
            <input
              aria-label="Password"
              aria-required="true"
              name="password"
              type="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
              ref={register({ required: true })}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              ref={register}
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm leading-5"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm leading-5">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className={classNames(
              "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",
              { "cursor-wait bg-indigo-500": loading },
              { "bg-indigo-600": !loading }
            )}
            disabled={loading}
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
