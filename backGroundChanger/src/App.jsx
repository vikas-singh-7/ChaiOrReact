import Button from "./components/Button";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      
        <Parent>
          <Button color="brown"> brown</Button>
          <Button color="pink"> pink</Button>
          <Button color="blue"> blue</Button>
          <Button color="green"> green</Button>
          <Button color="yellow"> yellow</Button>
          <Button color="red"> red</Button>
        </Parent>
      
    </>
  );
}

export default App;
