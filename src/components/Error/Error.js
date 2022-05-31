import React, { useEffect, useState } from "react";

import classes from "./Error.module.scss";

export const Error = ({
	errorMessage,
	additionalClass,
	closeButton,
	children,
}) => {
	const [hidden, setHidden] = useState({ display: "fixed" });

	useEffect(() => {
		setHidden({ display: "fixed" });
	}, [errorMessage]);

	if (errorMessage)
		return (
			<div className={classes.error_box} style={hidden}>
				<div className={classes[additionalClass]}>
					<p>
						Что-то пошло не так...
						<br />
						Ошибка: <span style={{ color: "#673ab7" }}>{errorMessage}</span>
						<br />
						{children}
					</p>
				</div>
				{closeButton && (
					<button
						className={classes.error_close_button}
						onClick={() => setHidden({ display: "none" })}>
						Закрыть
					</button>
				)}
			</div>
		);
	else return null;
};
