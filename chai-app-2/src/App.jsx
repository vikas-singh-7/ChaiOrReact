import React, { useState } from "react";

const App = () => {
  const style = {
    height: "400px",
    width: "300px",
    border: "3px solid white",
    backgroundColor: "orangered",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    top: "25" + "vh",
    left: "40vw",
    fontSize: "large",
    fontWeight: "700",
    color: "white",
  };
  const [count, setCount] = useState(10);
  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count>0 || count<0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div style={style}>the count is {count}</div>
      <button onClick={increase}>click to increase</button>
      <button onClick={decrease}>click to decrease</button>
    </div>
  );
};

export default App;
