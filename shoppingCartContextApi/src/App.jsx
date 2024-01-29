import React from "react";
import "./App.css";
import ItemCart from "./components/ItemCart";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <ItemCart title="mackbook" price={100000} />
      <ItemCart title="keyboard" price={1900} />
      <ItemCart title="mobile" price={21000} />
      <Cart />
    </div>
  );
};

export default App;
