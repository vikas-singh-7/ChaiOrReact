import React, { useState } from "react";
import Mydetails from "./Details";

const Detailsprovider = ({ children }) => {
    const [details,setDetails]=useState(null);
  return <Mydetails.Provider value={{details,setDetails}}>
     {children}
  </Mydetails.Provider>;
};

export default Detailsprovider;
