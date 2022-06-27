import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./variables.scss";
import "the-new-css-reset";
import Sitecontext from "./context/Sitecontext";
import AppRouter from "./Routers/AppRouter";

ReactDOM.render(
  <Sitecontext>
    <AppRouter />
  </Sitecontext>,
  document.getElementById("root")
);
