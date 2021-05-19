import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
// pages for this product
import People from "./People.jsx";

let hist = createMemoryHistory();

console.log("This is a test.");

export default () => (
  <Router history={hist}>
      <Route path="/people">
        <People />
      </Route>
  </Router>
);