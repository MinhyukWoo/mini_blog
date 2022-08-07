import React from "react";
import styles from "./Comment.module.css";

function Comment(props) {
  return (
    <div className={styles.Wrapper}>
      <div>
        <img className={styles.Image} src={props.img_src} alt="Profile Image" />
      </div>
      <div className={styles.ContentContainer}>
        <span className={styles.NameText}>{props.name}</span>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

export default Comment;
