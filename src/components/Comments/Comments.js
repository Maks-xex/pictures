import React from "react";

import classes from "./Comments.module.scss";

export const Comments = ({ comments }) =>
	comments.map((comment, i) => {
		let { date, name, text } = comment;
		return (
			<div className={classes.comments__item} key={i}>
				<p className={classes.comments_item__date}>
					{(date = new Date().toLocaleDateString())}
				</p>
				{name && <p className={classes.comments_item__name}>{name}</p>}
				<p className={classes.comments_item__text}>{text}</p>
			</div>
		);
	});
