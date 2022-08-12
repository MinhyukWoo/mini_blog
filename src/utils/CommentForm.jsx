import React from "react";
import { useState } from "react";

function CommentForm(props) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event) {
    props.onCommentSubmit(author, comment);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
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
          placeholder="댓글을 입력하세요."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default CommentForm;
