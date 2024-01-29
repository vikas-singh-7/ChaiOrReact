import React from "react";
import { increment, decrement } from "../Slicers/CountSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const style = {
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    width: "30vw",
    color: "black",
    fontSize: "1.5rem",
    fontFamily: "cursive",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  };
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={style}>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Card;
