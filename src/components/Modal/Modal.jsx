import React from "react";
import PropTypes from "prop-types";

import classes from "./Modal.module.scss";

export const Modal = ({ children, isOpen, onClose }) =>
  isOpen ? (
    <div className={classes.modal_fade}>
      <div className={classes.gallery_overlay}>
        {children}
        <button className={classes.gallery__close_modal} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  ) : null;

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
