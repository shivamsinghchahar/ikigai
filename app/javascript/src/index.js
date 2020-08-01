import React from "react";
import { render } from "react-dom";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.classList.add("root");

  render(<App />, document.body.appendChild(app));
});
