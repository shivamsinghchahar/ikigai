import axios from "axios";

import { Toast } from "components/ui";

const http = axios.create({
  baseURL: "/api/v1",
  headers: {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
http.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const status = error.response.status;

    if (status == 500 || status > 500) {
      Toast.error("Oops! Something went wrong");
    }

    return Promise.reject(error);
  }
);

export default http;
