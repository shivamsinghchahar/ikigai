import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, Signup, About } from "pages";

const Public = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/about" component={About} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
};

export default Public;
