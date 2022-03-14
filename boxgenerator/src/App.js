import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxColor, setBoxColor] = useState("");

  return (
    <div className="App">
      <Form boxes = {boxes} setBoxes={setBoxes} boxColor={boxColor} setBoxColor={setBoxColor}/>
    </div>
  );
}

export default App;