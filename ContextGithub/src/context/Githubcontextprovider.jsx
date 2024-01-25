import React, { useState } from "react";
import GithubContext from "./Githubcontext";

// we will make a provider which will wrap otehr cimponents so that kit can deliver data to that componets
const Githubcontextprovider = ({ children }) => {
  const [profiledata, setProfiledata] = useState({});

  return (
    <GithubContext.Provider value={{ profiledata, setProfiledata }}>
      {children}
    </GithubContext.Provider>
  );
};

export default Githubcontextprovider;
