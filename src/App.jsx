import logo from "./assets/images/calculator.png";
import { useState } from "react";
import Buttons from "./contents/Buttons";
import "./App.css";

function App() {
  const state = useState(0);
  const [counter, setCounter] = useState(0);
  console.log(state);
  return (
    <>
      <header>
        <img src={logo} />
      </header>
      <main>
        <div>
          {counter}
          <Buttons counter={counter} setCounter={setCounter} />
        </div>
      </main>
    </>
  );
}

export default App;
