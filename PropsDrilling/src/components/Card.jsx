import React from "react";
import InnerCard from "./InnerCard";

const Card = ({parentcount,setCount}) => {
  const style = {
    height: "400px",
    width: "300px",
    border: "2px solid black",
    padding: "5px",
    backgroundColor: "yellow",
    position: "absolute",
    top: "25vh",
    left: "40vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <InnerCard innercount={parentcount} setCount={setCount}/>
    </div>
  );
};

export default Card;
