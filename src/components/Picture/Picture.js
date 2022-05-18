import React from "react";

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
