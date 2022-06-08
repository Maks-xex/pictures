import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./page/Home/Home";

import "./index.scss";

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
