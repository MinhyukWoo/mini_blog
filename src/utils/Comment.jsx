import React from "react";
import styles from "./Comment.module.css";

function Comment(props) {
  const lines = props.content.split("\n");
  return (
    <div className={styles.Wrapper}>
      <div>
        <img className={styles.Image} src={props.img_src} alt="Profile Image" />
      </div>
      <div className={styles.ContentContainer}>
        <span className={styles.NameText}>{props.name}</span>
        <div className={styles.CommentText}>
          {lines.map((line, index) => {
            return <span key={index}>{line}<br /></span>;
          })} 
        </div>
        <span className={styles.TimeText}>{props.createdTime}</span>
      </div>
    </div>
  );
}

export default Comment;
