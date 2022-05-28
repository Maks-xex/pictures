import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserComment } from "../../../features/currentImg/currentImgSlice";
import { usePostCommentMutation } from "../../../features/currentImg/imagesInfoApi";

import classes from "./Form.module.scss";

export const Form = () => {
	const id = useSelector((state) => state.currentImg.currentImg.id);
	const [formValues, setFormValues] = useState({
		name: "",
		comment: "",
		date: new Date().getTime(),
	});
	const [addComment] = usePostCommentMutation();

	const dispatch = useDispatch();

	const postComment = async (e) => {
		e.preventDefault();
		if (formValues) {
			await addComment({ id, formValues }).unwrap();
			dispatch(addUserComment(formValues));
		}
	};

	const changeFormHandler = (evt) => {
		const { name, value } = evt.target;

		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<>
			<form onSubmit={(e) => postComment(e)} className={classes.gallery__form}>
				<label>
					Ваше Имя
					<input
						type='text'
						placeholder='Ваше Имя'
						value={formValues.name}
						name='name'
						onChange={changeFormHandler}
						required
					/>
				</label>
				<label>
					Ваш Комментарий
					<input
						type='text'
						placeholder='Ваш Комментарий'
						value={formValues.comment}
						name='comment'
						onChange={(evt) => changeFormHandler(evt)}
						required
					/>
				</label>
				<button type='submit'>Оставить комментарий</button>
			</form>
		</>
	);
};
