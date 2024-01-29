import React from "react";
import { useCartContext } from "../context/Cartcontext.jsx";

const ItemCart = (props) => {
  const { setItems } = useCartContext();

  return (
    <div>
      <h3>{props.title} </h3>
      <p>price : {props.price}</p>
      <button
        onClick={() => {
          setItems((prev) => [
            ...prev,
            { title: props.title, price: props.price },
          ]);
        }}
      >
        add to cart
      </button>
    </div>
  );
};

export default ItemCart;
