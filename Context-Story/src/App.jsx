import React from "react";
import "./App.css";
import Diamonds from "./components/Diamonds";
import Display from "./components/display";

const App = () => {
  return (
    <div>
      <h1>hey lets learn about context api </h1>

      <Diamonds />
      <Display />
    </div>
  );
};

export default App;
