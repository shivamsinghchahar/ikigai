import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.createElement("div");
  app.classList.add("root");

  render(
    <Router>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Router>,
    document.body.appendChild(app)
  );
});
