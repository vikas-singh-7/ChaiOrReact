import React, { useState } from "react";
import Mycontext from "./context";

const ContextProvider = ({ children }) => {
  const [Contextdata, setData] = useState("");
  return (
    <div>
      <Mycontext.Provider value={{ Contextdata, setData }}>
        {children}
      </Mycontext.Provider>
    </div>
  );
};

export default ContextProvider;
