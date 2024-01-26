import React, { useContext, useState } from "react";
import Mydetails from "../context/Details";

const DetailsCard = () => {
    const { setDetails } = useContext(Mydetails);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <div
      style={{
        height: "300px",
        width: "200px",
        border: "2px solid black",
        padding: "4px",
      }}
    >
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={(e) => {
          setLastname(e.target.value);
        }}
        value={lastname}
      />
      <button
        onClick={() => {
          setDetails({ firstname, lastname });
        }}
      >
        submit
      </button>
    </div>
  );
};

export default DetailsCard;
