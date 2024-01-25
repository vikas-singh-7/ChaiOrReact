import React from "react";
import InnerSecond from "./InnerSecond";

const InnerCard = ({innercount,setCount}) => {
  const style = {
    height: "300px",
    width: "200px",
    border: "2px solid black",
    padding: "5px",
    backgroundColor: "pink",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  };
  return (
    <div style={style}>
      <InnerSecond innersecondcount={innercount} setCount={setCount}/>
    </div>
  );
};

export default InnerCard;
