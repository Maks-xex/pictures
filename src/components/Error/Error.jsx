import React from "react";
import PropTypes from "prop-types";

import classes from "./Error.module.scss";

export const Error = ({ errorMessage }) =>
	errorMessage ? (
		<div className={classes.error_box}>
			<p>Что-то пошло не так...</p>
			<p>Ошибка: {errorMessage}</p>
		</div>
	) : null;

Error.propTypes = {
	errorMessage: PropTypes.string,
};
