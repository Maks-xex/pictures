import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error } from "../../../components/Error/Error";
import { Loader } from "../../../components/Loader/Loader";
import { Modal } from "../../../components/Modal/Modal";
import { Comments } from "../../../components/Comments/Comments";

import { clearCurrentImg } from "../../../features/currentImg/currentImgSlice";

import { Form } from "../Form/Form";

import classes from "./ModalImg.module.scss";

export const ModalImg = () => {
  const { currentImg, loading, isError, error } = useSelector(
    (state) => state.currentImg
  );
  const dispatch = useDispatch();

  const closeModal = () => dispatch(clearCurrentImg(null));

  useEffect(() => {
    currentImg && (document.body.style.overflow = "hidden");
    !currentImg && (document.body.style.overflow = "auto");
  }, [currentImg]);

  return (
    <>
      {currentImg ? (
        <Modal isOpen={currentImg && true} onClose={closeModal}>
          <img src={currentImg.url} alt={`img: ${currentImg.id}`} />
          <Form />
          <div className={classes.gallery_form__comments}>
            <Comments comments={currentImg.comments} />
          </div>
        </Modal>
      ) : null}
      <Loader isLoading={loading} />
      <Error errorMessage={error} isError={isError} />
    </>
  );
};
