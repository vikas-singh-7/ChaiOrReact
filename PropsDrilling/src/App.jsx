import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const[count,setCount]=useState(10);
  return (
    <div>
      <h3 style={{ position: "absolute", top: "15vh", left: "45vw" }}>
        hello world!
      </h3>
      <Card parentcount={count} setCount={setCount} />
    </div>
  );
};

export default App;
