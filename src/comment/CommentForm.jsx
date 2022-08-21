import React, { useId } from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import styles from "./CommentForm.module.css";

function CommentForm(props) {
  const { isLogin, userId } = useContext(UserContext);
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    const createdDate = new Date();
    const createdTime =
      createdDate.toLocaleDateString() +
      " " +
      createdDate.toLocaleTimeString([], {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    if (isLogin) {
    props.onCommentSubmit(userId, comment, createdTime);
    }else{
    props.onCommentSubmit(author, comment, createdTime);
    }
    event.preventDefault();
  };

  return (
    <div className={styles.Wrapper}>
      <form onSubmit={handleSubmit}>
        <div>
          {isLogin ? (
            <div>{userId}</div>
          ) : (
            <input
              className={styles.AuthorForm}
              type="text"
              placeholder="이름을 입력하세요."
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          )}
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
