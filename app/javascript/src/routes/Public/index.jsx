import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Login, About } from "pages";

const Public = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
};

export default Public;
