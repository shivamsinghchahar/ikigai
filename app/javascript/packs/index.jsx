import React from "react";
import { render } from "react-dom";
import App from "src/App";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("main");
  app.classList.add("app");
  render(<App />, document.body.appendChild(app));
});
