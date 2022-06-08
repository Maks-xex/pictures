import React from "react";
import PropTypes from "prop-types";

import classes from "./Loader.module.scss";

export const Loader = ({ isLoading }) =>
  isLoading ? (
    <div className={classes.loader_wrapper}>
      <div className={classes.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
