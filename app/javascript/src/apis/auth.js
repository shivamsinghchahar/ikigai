import http from "./axios";

export const login = payload => http.post("/session", payload);

export const currentSession = () => http.get("/session");
