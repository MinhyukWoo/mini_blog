import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "../utils/Comment";
import useCounter from "./useCounter";

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
  const [commentProps, setCommentProps] = useState([]);
  const [length, increaseLength, decreaseLength] = useCounter(
    1,
    defaultCommentProps.length
  );

  useEffect(() => {
    console.log(length);
    if (length <= defaultCommentProps.length) {
      setCommentProps(defaultCommentProps.slice(0, length));
    }
  }, [length]);

  return (
    <div>
      <div>
        <button onClick={decreaseLength}>이전</button>
        <button onClick={increaseLength}>다음</button>
      </div>
      <div>
        {commentProps.map((commentProp) => {
          return (
            <Comment
              img_src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              name={commentProp.name}
              content={commentProp.content}
            ></Comment>
          );
        })}
      </div>
    </div>
  );
}

export default CommentList;
