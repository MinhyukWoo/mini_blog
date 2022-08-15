import React from "react";
import Clock from "../utils/Clock";
import CommentList from "./CommentList";
import styles from "./Main.module.css";

function Main(props) {
  return (
    <div className={styles.Main}>
      <h2>댓글 서비스</h2>
      <CommentList></CommentList>
      <Clock></Clock>
    </div>
  );
}

export default Main;
