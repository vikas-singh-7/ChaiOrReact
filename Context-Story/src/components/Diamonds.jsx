import React, { useContext, useState } from "react";
import treasureContext from "../Context/Context";

const Diamonds = () => {
  const style = {
    height: "50vh",
    width: "50vw",
    border: "3px solid black",
    backgroundColor: "orangeRed",
    color: "black",
    fontFamily: "cursive",
  };
  const { treasure, setTreasure } = useContext(treasureContext);
  const [name, setName] = useState("");

  return (
    <div style={style}>
      <h2>the list of treasure is </h2>
      {treasure.map((item) => {
        return <li key={item}>{item}</li>;
      })}
      <h3>want to add more treasure ? </h3>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTreasure((prev) => [...prev, name]);
          setName("");
        }}
      >
        add more treasure
      </button>
    </div>
  );
};

export default Diamonds;
