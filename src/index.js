import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import './styles.css'

import {} from "./firebase";

const rootDiv = document.getElementById("root");

ReactDOM.render(
  <>
    <CssBaseline />
    <App />
  </>,
  rootDiv
);
