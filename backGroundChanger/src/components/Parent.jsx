import React from "react";

const Parent = ({ children }) => {
  const style = {
    width: "100vw",
    border: "2px solid black",
    padding: "4px",
    display: "flex",
    flexWrap:'wrap',
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  return <div style={style}>{children}</div>;
};

export default Parent;
