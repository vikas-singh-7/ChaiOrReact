import React from "react";
import { useState } from "react";
import UserContext from "../UserContext";
import { useContext } from "react";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const style = {
    height: "500px",
    width: "300px",
    border: "2px solid black",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3px",
    position: "absolute",
    left: "25vw",
    top: 0,
  };
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const onHandleChange = (e) => {
    setUsername(e.target.value);
  };
  const onlastChange = (e) => {
    setLastname(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, lastname });
  };
  return (
    <div style={style}>
      <input
        type="text"
        name=""
        id=""
        placeholder="firstname"
        value={username}
        onChange={onHandleChange}
      />

      <input
        type="text"
        placeholder="lastname"
        onChange={onlastChange}
        value={lastname}
      />
      <button onClick={onHandleSubmit}>submit</button>
    </div>
  );
};

export default Login;
