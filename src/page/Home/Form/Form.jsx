import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./Form.module.scss";

export const Form = ({ postCommentAsync }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    comment: "",
    date: new Date().getTime(),
  });

  const changeFormHandler = (evt) => {
    const { id, value } = evt.target;

    setFormValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => postCommentAsync(e, formValues)}
      className={classes.gallery__form}
    >
      <label>
        Ваше Имя
        <input
          type="text"
          placeholder="Ваше Имя"
          value={formValues.name}
          id="name"
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
          id="comment"
          onChange={(evt) => changeFormHandler(evt)}
          required
        />
      </label>
      <button type="submit">Оставить комментарий</button>
    </form>
  );
};

Form.propTypes = {
  postCommentAsync: PropTypes.func.isRequired,
};
