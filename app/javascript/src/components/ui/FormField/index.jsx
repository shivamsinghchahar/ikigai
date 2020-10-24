import React from "react";
import classNames from "classnames";

const FormField = ({
  id,
  name,
  type,
  label,
  required,
  register,
  className,
  wrapperClassName,
  error,
  ...rest
}) => {
  const defaultClasses =
    "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5";

  const errorClasses =
    "text-red-700 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red border-red-300";

  return (
    <div className={wrapperClassName}>
      <label
        htmlFor={id}
        className={classNames(
          "block text-sm font-medium leading-5",
          { "text-red-700": !!error },
          { "text-gray-700": !error }
        )}
      >
        <span>{required ? `* ${label}` : label}</span>
        {!!error && <span className="ml-1">{error}</span>}
      </label>
      <div className="mt-1 rounded-md shadow-sm">
        <input
          id={id}
          name={name}
          type={type}
          className={classNames({ [defaultClasses]: !className }, className, {
            [errorClasses]: !!error,
            "focus:border-indigo-300 focus:shadow-outline-indigo": !error,
          })}
          aria-label={label}
          aria-required={required}
          ref={register}
          {...rest}
        />
      </div>
    </div>
  );
};

export default FormField;
