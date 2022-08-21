import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function LoginForm(props) {
  const { onLogin } = useContext(UserContext);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const handleSubmmit = (event) => {
    onLogin(userId, userPw);
    event.preventDefault();
  };
  return (
    <fieldset>
      <div>
        <label>아이디:</label>
        <input
          type="text"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
      </div>
      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          value={userPw}
          onChange={(event) => setUserPw(event.target.value)}
        />
      </div>
      <button onClick={handleSubmmit}>로그인</button>
    </fieldset>
  );
}

export default LoginForm;
