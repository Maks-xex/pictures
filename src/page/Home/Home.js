import React, { useEffect, useState } from "react";

import { getImages } from "../../api/getImages";
import { getImgId } from "../../api/getImgId";
import { postComments } from "../../api/postComments";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { Modal } from "../../components/Modal/Modal";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

import { Gallery } from "./Gallery/Gallery";

const postComment = { name: "", comment: "" };

export const Home = () => {
	const [imagesList, setImagesList] = useState([]);
	const [imgInfo, setImgInfo] = useState([]);
	const [currentImg, setCurrentImg] = useState(null);
	const [loader, setLoader] = useState(false);
	const [commentValue, setCommentValue] = useState(postComment);
	const [error, setError] = useState(null);

	const getAsyncImages = async () => {
		setLoader(true);
		try {
			const images = await getImages();
			const imgInfo = await getImgId(images);
			setImagesList(images);
			setImgInfo(imgInfo);
		} catch (error) {
			setLoader(false);
			setError(error);
		}
		setLoader(false);
	};

	const postAsync = async () => {
		try {
			const response = await postComments(commentValue, currentImg.id);
			currentImg.comments.push(response);
			setCurrentImg((prev) => ({ ...prev }));
		} catch (error) {
			setCurrentImg(null);
			setError(error);
		}
	};

	const currentImagesHandler = (evt, id) => {
		evt.preventDefault();
		setCurrentImg(imgInfo.find((it) => it.id === id));
	};

	const handlerCloseButton = () => {
		document.querySelector("body").style.overflow = "visible";
		setCurrentImg(null);
	};

	const submitHandler = (evt) => {
		evt.preventDefault();
		postAsync();
	};

	const changeHandler = (evt) => {
		const id = evt.target.id;
		const value = evt.target.value;

		setCommentValue((prev) => ({
			...prev,
			[id]: id === id ? value : prev[id],
		}));
	};

	useEffect(() => {
		getAsyncImages();
	}, []);

	return (
		<>
			<Header />
			{error ? (
				<Error errorMessage={error} />
			) : loader ? (
				<Loader />
			) : (
				<main>
					<Gallery
						img={imagesList}
						currentImg={currentImg}
						currentImagesHandler={currentImagesHandler}
						submitHandler={submitHandler}
					/>
				</main>
			)}
			<Footer />
			{currentImg && (
				<Modal
					currentImg={currentImg}
					commentValues={commentValue}
					onClose={handlerCloseButton}
					onSubmit={submitHandler}
					onChange={changeHandler}
				/>
			)}
		</>
	);
};
