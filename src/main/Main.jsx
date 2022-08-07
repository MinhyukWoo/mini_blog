import React from "react";
import Clock from "../utils/Clock";
import CommentList from "./CommentList";

function Main(props) {
  return (
    <div>
      <h2>댓글 서비스</h2>
      <CommentList></CommentList>
      <Clock></Clock>
    </div>
  );
}

export default Main;
