import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxColor, setBoxColor] = useState("");

  return (
    <div className="App">
      <Form boxes = {boxes} setBoxes={setBoxes} boxColor={boxColor} setBoxColor={setBoxColor}/>
      <Display boxes={boxes}/>
    </div>
  );
}

export default App;