import React, { useContext } from "react";
import treasureContext from "../Context/Context";

const Display = () => {
  const style = {
    height: "50vh",
    width: "50vw",
    border: "3px solid black",
    backgroundColor: "orangeRed",
    color: "black",
    fontFamily: "cursive",
  };
  const { treasure, setTreasure } = useContext(treasureContext);

  return (
    <div style={style}>
      {treasure.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </div>
  );
};

export default Display;
