import React, { Children, useState } from "react";
import MyContext from "./Context";

const ContextProvider = ({ children }) => {
  const [value, setvalue] = useState([]);
  return (
    <>
      <MyContext.Provider value={{ value, setvalue }}>
        {children}
      </MyContext.Provider>
    </>
  );
};

export default ContextProvider;
