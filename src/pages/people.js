import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
// pages for this product
import People from "./People.jsx";

let hist = createMemoryHistory();

console.log("This is a test that it read people.js. It did!");

export default () => (

        <People />
);