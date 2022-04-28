import React from "react";

import "./error.scss";

export const Error = ({ errorMessage }) => (
	<div className='error-box'>
		<p>Что-то пошло не так...</p>
		<p>Ошибка: {errorMessage}</p>
	</div>
);
