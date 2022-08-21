import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";
import useCounter from "../main/useCounter";
import CommentForm from "./CommentForm";

const defaultCommentProps = [
  {
    name: "우민혁",
    content: "안녕하세요!",
    createdTime: "2022. 8. 12. 09:49",
  },
  {
    name: "민우혁",
    content: "반갑습니다.",
    createdTime: "2022. 8. 12. 09:52",
  },
  {
    name: "강남",
    content: "😀",
    createdTime: "2022. 8. 12. 10:10",
  },
  {
    name: "Elvis",
    content: "Hello.",
    createdTime: "2022. 8. 13. 04:52",
  },
  {
    name: "우민혁",
    content: "안녕히 계세요.",
    createdTime: "2022. 8. 14. 11:21",
  },
];

function CommentList(props) {
  const [commentProps, setCommentProps] = useState(defaultCommentProps);

  function addComment(author, comment, createdTime) {
    setCommentProps((state) => {
      return state.concat({
        name: author,
        content: comment,
        createdTime: createdTime,
      });
    });
  }

  return (
    <div>
      <div>
        {commentProps.map((commentProp, index) => {
          return (
            <Comment
              key={index}
              img_src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              name={commentProp.name}
              content={commentProp.content}
              createdTime={commentProp.createdTime}
            ></Comment>
          );
        })}
      </div>
      <CommentForm onCommentSubmit={addComment}></CommentForm>
    </div>
  );
}

export default CommentList;
