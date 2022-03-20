import React, { useEffect, useState } from "react";
import { getImages } from "../../api/getImages";
import { postComments } from "../../api/postComments";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Gallery } from "./Gallery/Gallery";
import { Modal } from "../../components/Modal/Modal";
import { getImgId } from "../../api/getImgId";
import { Loader } from "../../components/Loader/Loader";
import { Error } from "../../components/Error/Error";

const postComment = { name: "", comment: "" };

export const Home = () => {
	const [imagesList, setImagesList] = useState([]);
	const [imgInfo, setImgInfo] = useState([]);
	const [currentImg, setCurrentImg] = useState();
	const [loader, setLoader] = useState();
	const [commentValue, setCommentValue] = useState(postComment);
	const [error, setError] = useState();

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

	useEffect(() => {
		getAsyncImages();
	}, []);

	const currentImagesHandler = (evt, id) => {
		evt.preventDefault();
		setCurrentImg(imgInfo.find((it) => it.id === id));
	};

	const handlerCloseButton = () => {
		document.querySelector("body").style.overflow = "visible";
		setCurrentImg(null);
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
	const submitHandler = (evt) => {
		evt.preventDefault();
		postAsync();
	};

	const changeHandler = (evt) => {
		setCommentValue((prev) => ({
			name: (evt.target.id === "name" && evt.target.value) || prev.name,
			comment:
				(evt.target.id === "comment" && evt.target.value) || prev.comment,
		}));
	};

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
