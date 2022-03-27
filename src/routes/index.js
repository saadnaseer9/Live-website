// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import Support from "../containers/Support.js";
import Documentation from "../containers/Documentation";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Support" component={Support} />
      <Route exact path="/Documentation" component={Documentation} />
    </Switch>
  );
};

export default index;
