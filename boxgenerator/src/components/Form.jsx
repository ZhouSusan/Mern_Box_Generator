import React, {useState} from 'react';

const Form = (props) => {
    const [colorOfBox, setColorOfBox] = useState("");
    const [boxes, setBoxes] = useState([]);//this keeps tracks the list of colors 
  
    const createBox = (event) => {
      //We are getting this event from the onSumbit, which is then passed on to the createBox
      event.preventDefault();
      //because our setState is an array, we want to pass in a new array of the list of colors and the new colorBox
      setBoxes([...boxes, colorOfBox]);
      setColorOfBox("");
    }
  
    return (
      <div>
        <form onSubmit={(event) => createBox(event)}>
          <label>Color</label>
          {/* the event is the onChange, target is the input, the value is whatever input the user is putting in */}
          <input onChange={(e) => setColorOfBox(e.target.value)} type="text" value={colorOfBox}/>
        {/* When the user clicks on Add button, it will trigger the onSubmit which will use the CreateBox function, which is where we have access to the new box color  */}
          <button>Add</button>
        </form>
          {/* //we use a map() to list out the elements from an array.// we use flex, to make the boxes go side by side */}
          <div style={{display:"flex"}}>
          {
            boxes.map((color, i) => {
              return <div key={i} style={{backgroundColor: color, width:200, height: 200, marginRight: 10}}>
              </div>
            })
          }
        </div>
    </div>
    );
}

export default Form;