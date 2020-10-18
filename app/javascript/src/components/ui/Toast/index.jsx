import React from "react";
import { toast } from "react-toastify";

import Success from "./Success";
import Error from "./Error";
import Info from "./Info";
import Warn from "./Warn";

toast.configure();

export default {
  success: (message, delay = false) =>
    toast.success(<Success message={message} />, {
      position: toast.POSITION.BOTTOM_CENTER,
      closeButton: false,
      className: "p-0 bg-green-50 shadow-md rounded-md",
      progressClassName: "bg-green-400",
      delay: delay,
    }),
  error: (message, delay = false) =>
    toast.error(<Error message={message} />, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      className: "p-0 bg-red-50 shadow-md rounded-md",
      progressClassName: "bg-red-400",
      delay: delay,
    }),
  info: (message, delay = false) =>
    toast.info(<Info message={message} />, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      className: "p-0 bg-blue-50 shadow-md rounded-md",
      progressClassName: "bg-blue-400",
      delay: delay,
    }),
  warn: (message, delay = false) =>
    toast.warn(<Warn message={message} />, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      className: "p-0 bg-yellow-50 shadow-md rounded-md",
      progressClassName: "bg-yellow-400",
      delay: delay,
    }),
};
