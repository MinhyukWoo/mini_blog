import React from "react";
import Clock from "../utils/Clock";
import CommentList from "../comment/CommentList";
import styles from "./Main.module.css";
import LoginForm from "../user/LoginForm";
import { useState } from "react";
import { useCallback } from "react";
import UserContext from "../context/UserContext";

function Main(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const onLogin = useCallback((userId, userPw) => {
    console.log(isLogin, userId, userPw);
    setIsLogin(true);
    setUserId(userId);
    setUserPw(userPw);
  }, []);
  const onLogout = useCallback((event) => {
    setIsLogin(false);
    event.preventDefault()
  })
  return (
    <UserContext.Provider value={{ isLogin, userId, userPw, onLogin }}>
      <div className={styles.Main}>
        <h2>댓글 서비스</h2>
        <CommentList></CommentList>
        {isLogin ? <button onClick={onLogout}>로그아웃</button> : <LoginForm></LoginForm> }
      </div>
    </UserContext.Provider>
  );
}

export default Main;
