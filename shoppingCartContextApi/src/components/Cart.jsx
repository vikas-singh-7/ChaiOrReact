import React, { useState } from "react";

import { useCartContext } from "../context/Cartcontext";

const Cart = () => {
  const style = {
    backgroundImage:
      "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
    width: "400px",
    color: "black",
    fontSize: "1.5rem",
    fontFamily: "cursive",
  };
  const { items } = useCartContext();

  const total = items.reduce((a, c) => a + c.price, 0);

  return (
    <div style={style}>
      {items.map((item) => {
        return (
          <li key={Math.random()}>
            {item.title} {item.price}
          </li>
        );
      })}

      <h3>total bill is : {total} </h3>
    </div>
  );
};

export default Cart;
