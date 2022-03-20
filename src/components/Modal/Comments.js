import React from "react";

export const Comments = ({ date, text, name }) => (
	<div className='comments__item'>
		<p className='comments-item__date'>
			{(date = new Date().toLocaleDateString())}
		</p>
		{name && <p className='comments-item__name'>{name}</p>}
		<p className='comments-item__text'>{text}</p>
	</div>
);
