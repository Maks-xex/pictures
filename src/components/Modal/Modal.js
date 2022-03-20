import React from "react";
import { Comments } from "./Comments";
import "./modal.scss";

const inputsValue = {
	name: "Ваше Имя",
	comment: "Ваш Комментарий",
};

const renderInputs = (commentValues, onChange) =>
	Object.keys(inputsValue).map((it, i) => (
		<label key={i}>
			{inputsValue[it]}
			<input
				type='text'
				placeholder={inputsValue[it]}
				value={commentValues.it}
				id={it.split("commentValues.").join("")}
				onChange={(evt) => onChange(evt)}
				required
			/>
		</label>
	));

const renderComments = (comments) =>
	comments.map((comment, i) => (
		<Comments
			date={comment.date}
			text={comment.text || comment.comment}
			key={i}
			name={comment.name}
		/>
	));

export const Modal = ({
	currentImg,
	onClose,
	onSubmit,
	commentValues,
	onChange,
}) => {
	document.querySelector("body").style.overflow = "hidden";

	return (
		<div className='modal-fade'>
			<div className='gallery-overlay'>
				<img src={currentImg.url} alt={`img: ${currentImg.id}`} />
				<form onSubmit={(evt) => onSubmit(evt)} className='gallery__form'>
					{renderInputs(commentValues, onChange)}
					<button type='submit'>Оставить комментарий</button>
				</form>
				<div className='gallery-form__comments'>
					{renderComments(currentImg.comments)}
				</div>
				<button className='gallery__close-modal' onClick={() => onClose()}>
					Закрыть
				</button>
			</div>
		</div>
	);
};
