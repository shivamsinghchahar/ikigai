import React, { useState } from "react";
import classNames from "classnames";

import { AuthLayout } from "layouts";
import { Toast } from "components/ui";

import { signup } from "apis/user";

import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      const { data } = await signup({
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      });
      authDispatch({ type: "LOGIN", payload: { ...data, is_admin: false } });
      userDispatch({ type: "SET_USER", payload: data });
      Toast.success("Successfully signed up");
    } catch (error) {
      console.dir(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            First name
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="first_name"
              type="text"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-indigo-300"
              aria-label="First name"
              aria-required="true"
              autoFocus
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Last name
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="last_name"
              type="text"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-indigo-300"
              aria-label="Last Name"
              aria-required="true"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-indigo-300"
              aria-label="Email address"
              aria-required="true"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password"
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-indigo-300"
              aria-label="Password"
              aria-required="true"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="password_confirmation"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Confirm password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password_confirmation"
              type="password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-indigo-300"
              aria-label="Confirm password"
              aria-required="true"
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
            />
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
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
