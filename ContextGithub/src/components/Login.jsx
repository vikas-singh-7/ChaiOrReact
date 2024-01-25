import React, { useContext, useState } from "react";
import GithubContext from "../context/Githubcontext";

const Login = () => {
  const style = {
    height: "300px",
    width: "300px",
    border: "2px solid black",
    padding: "4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  };
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const { setProfiledata } = useContext(GithubContext);
  const [valid, setvalid] = useState(false);

  const onHandleclick = (e) => {
    e.preventDefault();

    if (name === "vikas" && password === "vikas0772") {
      fetch("https://api.github.com/users/vikas-singh-7")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setProfiledata(data);
        });
      console.log("hello vikas");
      setvalid(true);
    } else {
      setvalid(false);
    }
  };
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button onClick={onHandleclick}>submit</button>
      {valid ? <h3>welcome </h3> : <h3>wrong pass word</h3>}
    </div>
  );
};

export default Login;
