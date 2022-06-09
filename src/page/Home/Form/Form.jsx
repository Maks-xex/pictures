import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postCommentAsync } from "../../../features/currentImg/postCommentAsync";

import classes from "./Form.module.scss";

export const Form = () => {
  const [formValues, setFormValues] = useState({ name: "", comment: "" });
  const id = useSelector((state) => state.currentImg.currentImg.id);

  const dispatch = useDispatch();

  const postComment = async (e) => {
    e.preventDefault();
    dispatch(postCommentAsync({ formValues, id }));
  };

  const changeFormHandler = (evt) => {
    const { name, value } = evt.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={postComment} className={classes.gallery__form}>
      <label>
        Ваше Имя
        <input
          type="text"
          placeholder="Ваше Имя"
          value={formValues.name}
          name="name"
          onChange={changeFormHandler}
          required
        />
      </label>
      <label>
        Ваш Комментарий
        <input
          type="text"
          placeholder="Ваш Комментарий"
          value={formValues.comment}
          name="comment"
          onChange={(evt) => changeFormHandler(evt)}
          required
        />
      </label>
      <button type="submit">Оставить комментарий</button>
    </form>
  );
};
