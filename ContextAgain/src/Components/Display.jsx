import React from "react";
import { useContext } from "react";
import MyContext from "../Context/Context";
const Display = () => {
  const { value } = useContext(MyContext);
  
  return (
    <div>
      {value.map((item) => {
        return (
          <li key={item}>
            {item.email} {item.password}
          </li>
        );
      })}
    </div>
  );
};

export default Display;
