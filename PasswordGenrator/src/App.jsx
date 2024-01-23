import React from "react";
import Card from "./components/Card";
import Password from "./components/Password";

const App = () => {
  return (
    <>
      <div
      style={{
        height: "100vh",
        width: "100v",
        backgroundColor: "#2c1320",
        padding: "10px",
      }}
    >
      <Password/>

      <Card />
    </div>
    </>
  );
};

export default App;
