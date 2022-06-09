import React from "react";

import logo from "../../assets/png/logo.png";

import classes from "./Header.module.scss";

export const Header = () => (
  <header className={classes.header}>
    <h1 className="v_hidden">Avito</h1>
    <img src={logo} alt="Logo" width="75px" />
  </header>
);
