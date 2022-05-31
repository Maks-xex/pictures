import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../../components/Error/Error";
import { Loader } from "../../../components/Loader/Loader";
import { Modal } from "../../../components/Modal/Modal";
import { Comments } from "../../../components/Comments/Comments";

import { Form } from "../Form/Form";

import { useGetImgInfoByIdQuery } from "../../../features/currentImg/imagesInfoApi";
import {
	addCurrentImg,
	removeCurrentImg,
} from "../../../features/currentImg/currentImgSlice";

import classes from "./ModalImg.module.scss";

export const ModalImg = () => {
	const { currentImg, id } = useSelector((state) => state.currentImg);
	const { data, isFetching, isSuccess, error } = useGetImgInfoByIdQuery(id, {
		skip: !id,
	});
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(removeCurrentImg());
	};

	useEffect(() => {
		isSuccess && dispatch(addCurrentImg(data));
	}, [dispatch, data, isSuccess]);

	return (
		<>
			{!isFetching && currentImg ? (
				<Modal isOpen={currentImg} onClose={closeModal}>
					<img src={currentImg.url} alt={`img: ${currentImg.id}`} />
					<Form />
					<div className={classes.gallery_form__comments}>
						<Comments comments={currentImg.comments} />
					</div>
				</Modal>
			) : null}
			<Loader isLoading={isFetching} />
			<Error errorMessage={error} />
		</>
	);
};
