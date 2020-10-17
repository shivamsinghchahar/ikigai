import React from "react";

import Public from "./Public";
import Private from "./Private";

import { useAuthState } from "contexts/auth";
import { useUserState } from "contexts/user";

const Routes = () => {
  const { isLoggedIn } = useAuthState();
  const { user } = useUserState();

  return isLoggedIn && user ? <Private /> : <Public />;
};

export default Routes;
