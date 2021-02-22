"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./containers/AppContainer";
import reportWebVitals from "./reportWebVitals";
import { debugContextDevtool } from "react-context-devtool";

const container = document.getElementById("root");

ReactDOM.render(
  // <React.StrictMode>
  <AppContainer />,
  // </React.StrictMode>
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// configure react context devtool for development
// let options = {
//   debugReducer: true, //by default true
//   debugContext: true, //by default true
// };

// debugContextDevtool(container, options);
