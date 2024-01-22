import React, { useState } from "react";

const Button = ({ color, children }) => {
  const onHandleClick = () => {
    document.getElementById("root").style.backgroundColor = color;
  };
  const bstyle = {
    backgroundColor: color,
  };
  return (
    <div>
      <button style={bstyle} onClick={onHandleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
