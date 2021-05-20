import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.jsx";

let hist = createMemoryHistory();

export default () => (
        <LandingPage />
);
