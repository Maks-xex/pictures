import React from "react";

import classes from "./Comments.module.scss";

export const Comments = ({ comments }) =>
  comments.map((commentValue, i) => {
    const { name, text, comment } = commentValue;
    return (
      <div className={classes.comments__item} key={i}>
        <p className={classes.comments_item__date}>
          {new Date().toLocaleDateString()}
        </p>
        {name && <p className={classes.comments_item__name}>{name}</p>}
        <p className={classes.comments_item__text}>{text || comment}</p>
      </div>
    );
  });
