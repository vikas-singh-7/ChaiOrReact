import React, { useState } from "react";
import { counterContext } from "./Incrementcontext";

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};

export default ContextProvider;
