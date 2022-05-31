import React from "react";
import { useDispatch } from "react-redux";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";
import { Picture } from "../../components/Picture/Picture";

import { ModalImg } from "./ModalImg/ModalImg";

import { addId } from "../../features/currentImg/currentImgSlice";
import { useGetImagesQuery } from "../../features/images/imagesApi";

import classes from "./Home.module.scss";

export const Home = () => {
	const { data: images, isLoading, error } = useGetImagesQuery();

	const dispatch = useDispatch();

	const onImageClickHandler = (id) => {
		dispatch(addId({ id }));
	};

	const renderImages = () =>
		images &&
		images.map((img) => (
			<Picture
				key={img.id}
				img={img}
				alt={img.id}
				onImageClickHandler={onImageClickHandler}
			/>
		));

	return (
		<>
			<Header />
			<main>
				<section className={classes.gallery}>{renderImages()}</section>
			</main>
			<Footer />
			<ModalImg />
			<Error
				errorMessage={error && error.originalStatus}
				children={"перезагрузите страницу"}
			/>
			<Loader isLoading={isLoading} />
		</>
	);
};
