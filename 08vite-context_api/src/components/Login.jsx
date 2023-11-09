import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login page</h2>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="userName"
        type="text"
      ></input>
      <br/>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      ></input>
      <br/>
      <button onClick={handleSubmit}>submit</button>
      <br/>
      <hr/>
    </div>
  );
};

export default Login;
