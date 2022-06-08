import React from "react";

import classes from "./Comments.module.scss";

export const Comments = ({ comments }) =>
  comments.map((comment, i) => {
    const { date, name, text, comment: textComment } = comment;
    return (
      <div className={classes.item} key={i}>
        <p className={classes.item__date}>
          {new Date(date).toLocaleDateString()}
        </p>
        {name && <p className={classes.item__name}>{name}</p>}
        <p className={classes.item__text}>{text || textComment}</p>
      </div>
    );
  });
