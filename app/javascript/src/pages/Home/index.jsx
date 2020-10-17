import React from "react";

import { useUser } from "contexts/user";
import { useAuthDispatch } from "contexts/auth";

const Home = () => {
  const [{ user }, userDispatch] = useUser();
  const authDispatch = useAuthDispatch();

  const handleLogout = () => {
    authDispatch({ type: "LOGOUT" });
    userDispatch({ type: "SET_USER", payload: { user: null } });
  };

  return (
    <div className="p-6 text-center text-lg">
      <p>Welcome Home, {user.first_name + " " + user.last_name}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
