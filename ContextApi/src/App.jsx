import React from "react";
import UserContextProvider from "./UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
};

export default App;
