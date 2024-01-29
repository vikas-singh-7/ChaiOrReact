import React from "react";
import { useContext } from "react";
import { counterContext } from "../context/Incrementcontext";

const Display = () => {
  const { count } = useContext(counterContext);

  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        border: "2px solid black",
        background: "linear-gradient(#e66465, #9198e5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>{count}</h2>
    </div>
  );
};

export default Display;
