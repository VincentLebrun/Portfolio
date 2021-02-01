import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Projets from "./components/Projets";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/projets" component={Projets} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
