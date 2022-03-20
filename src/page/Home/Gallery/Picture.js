import React from "react";

export const Picture = ({ img, currentImagesHandler }) => (
	<a
		href={`/${img.id}`}
		className='picture'
		onClick={(evt) => currentImagesHandler(evt, img.id)}>
		<img src={img.url} alt={`img: ${img.id}`} />
	</a>
);
