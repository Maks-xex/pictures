import React from "react";
import PropTypes from "prop-types";

import classes from "./Picture.module.scss";

export const Picture = ({ img, alt, onImageClickHandler }) => {
  return (
    <img
      className={classes.picture}
      src={img.url}
      alt={alt}
      onClick={() => onImageClickHandler(img.id)}
    />
  );
};
Picture.propTypes = {
  img: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  onImageClickHandler: PropTypes.func.isRequired,
};
