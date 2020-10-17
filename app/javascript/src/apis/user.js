import http from "./axios";

export const signup = payload => http.post("users", payload);
