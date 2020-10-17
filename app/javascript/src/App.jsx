import React, { useState, useEffect } from "react";

import Routes from "routes";

import { currentSession } from "apis/auth";

import { useAuthState } from "contexts/auth";
import { useUserDispatch } from "contexts/user";

import "stylesheets/application";

const App = () => {
  const [loading, setLoading] = useState(false);
  const { authToken } = useAuthState();

  const dispatch = useUserDispatch();

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      const { data } = await currentSession();
      await dispatch({ type: "SET_USER", payload: data });
    } catch (error) {
      console.dir(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authToken && fetchCurrentUser();
  }, []);

  return !loading && <Routes />;
};

export default App;
