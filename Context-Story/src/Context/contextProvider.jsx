import React, { useState } from "react";
import treasureContext from "./Context";

const ContextProvider = ({ children }) => {
  const [treasure, setTreasure] = useState(["sand"]);
  return (
    <treasureContext.Provider value={{ treasure, setTreasure }}>
      {children}
    </treasureContext.Provider>
  );
};

export default ContextProvider;
