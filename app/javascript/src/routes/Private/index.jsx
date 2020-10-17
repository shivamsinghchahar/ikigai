import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "pages";

const Private = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Private;
