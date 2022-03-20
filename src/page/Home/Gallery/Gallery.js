import React from "react";
import { Picture } from "./Picture";
import "./gallery.scss";

const renderImg = (images, currentImagesHandler) =>
	images.map((img) => (
		<Picture
			img={img}
			key={img.id}
			currentImagesHandler={currentImagesHandler}
		/>
	));

export const Gallery = ({ img, currentImagesHandler }) => (
	<section className='gallery'>
		<div className='gallery-wrapper'>
			{renderImg(img, currentImagesHandler)}
		</div>
	</section>
);
