import React, { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import { AuthLayout } from "layouts";
import { Toast, FormField } from "components/ui";

import { signup } from "apis/user";

import { useAuthDispatch } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { register, handleSubmit } = useForm();

  const authDispatch = useAuthDispatch();
  const userDispatch = useUserDispatch();

  const onSubmit = async signupData => {
    try {
      setLoading(true);
      const { data } = await signup({
        user: {
          ...signupData,
        },
      });
      authDispatch({ type: "LOGIN", payload: { ...data, is_admin: false } });
      userDispatch({ type: "SET_USER", payload: data });
      Toast.success("Successfully signed up 🎉");
    } catch (error) {
      setErrors(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          id="first_name"
          name="first_name"
          type="text"
          label="First name"
          required
          autoFocus
          register={register}
          error={errors?.first_name?.[0]}
        />

        <FormField
          wrapperClassName="mt-6"
          id="last_name"
          name="last_name"
          type="text"
          label="Last name"
          required
          register={register}
          error={errors?.last_name?.[0]}
        />

        <FormField
          wrapperClassName="mt-6"
          id="email"
          name="email"
          type="email"
          label="Email address"
          required
          register={register}
          error={errors?.email?.[0]}
        />

        <FormField
          wrapperClassName="mt-6"
          id="password"
          name="password"
          type="password"
          label="Password"
          required
          register={register}
          error={errors?.password?.[0]}
        />

        <FormField
          wrapperClassName="mt-6"
          id="password_confirmation"
          name="password_confirmation"
          type="password"
          label="Confirm password"
          required
          register={register}
          error={errors?.password_confirmation?.[0]}
        />

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
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
