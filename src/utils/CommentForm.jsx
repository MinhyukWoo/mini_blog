import React from "react";
import { useState } from "react";
import styles from "./CommentForm.module.css";

function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    console.log(author);
    console.log(comment);
    const createdDate = new Date();
    const createdTime =
      createdDate.toLocaleDateString() +
      " " +
      createdDate.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    props.onCommentSubmit(author, comment, createdTime);
    event.preventDefault();
  }

  return (
    <div className={styles.Wrapper}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.AuthorForm}
            type="text"
            placeholder="이름을 입력하세요."
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            className={styles.CommentForm}
            placeholder="댓글을 입력하세요."
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <div>
          <input className={styles.SubmitButton} type="submit" value="등록" />
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
