import React, { useState } from "react";
import PropTypes from "prop-types";

import { Error } from "../../../components/Error/Error";
import { Loader } from "../../../components/Loader/Loader";
import { Modal } from "../../../components/Modal/Modal";
import { Comments } from "../../../components/Comments/Comments";

import { postComment } from "../../../api/postComment";

import { Form } from "../Form/Form";

import classes from "./ModalImg.module.scss";

export const ModalImg = ({ currentImg, setCurrentImg }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postCommentAsync = async (e, formValues) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await postComment(formValues, currentImg.id);
      currentImg.comments.push(response);
      setCurrentImg({ ...currentImg });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {currentImg ? (
        <Modal
          isOpen={currentImg ? true : false}
          onClose={() => setCurrentImg(null)}
        >
          <img src={currentImg.url} alt={`img: ${currentImg.id}`} />
          <Form postCommentAsync={postCommentAsync} />
          <div className={classes.gallery_form__comments}>
            <Comments comments={currentImg.comments} />
          </div>
        </Modal>
      ) : null}
      <Loader isLoading={loading} />
      <Error errorMessage={error} />
    </>
  );
};
ModalImg.propTypes = {
  currentImg: PropTypes.object,
  setCurrentImg: PropTypes.func.isRequired,
};
