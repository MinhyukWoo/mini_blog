import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "../utils/Comment";
import useCounter from "./useCounter";
import CommentForm from "../utils/CommentForm";

const defaultCommentProps = [
  {
    name: "우민혁",
    content: "안녕하세요!",
  },
  {
    name: "민우혁",
    content: "반갑습니다.",
  },
  {
    name: "강남",
    content: "😀",
  },
  {
    name: "Elvis",
    content: "Hello.",
  },
  {
    name: "우민혁",
    content: "안녕히 계세요.",
  },
];

function CommentList(props) {
  const [commentProps, setCommentProps] = useState(defaultCommentProps);

  function addComment(author, comment) {
    setCommentProps([... commentProps, {name: author, content: comment}]);
  }

  const comments = commentProps.map((commentProp, index) => {
    return (
      <Comment
        key={index}
        img_src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        name={commentProp.name}
        content={commentProp.content}
      ></Comment>
    );
  });

  return (
    <div>
      <div>{comments}</div>
      <CommentForm onCommentSubmit={addComment}></CommentForm>
    </div>
  );
}

export default CommentList;
