import React, {useState} from 'react';

const Form = (props) => {
    const {boxes, setBoxes} = props;
    const {boxColor, setBoxColor} = props;
  
    const createBox = (event) => {
      //We are getting this event from the onSumbit, which is then passed on to the createBox
      event.preventDefault();
      //because our setState is an array, we want to pass in a new array of the list of colors and the new colorBox
      setBoxes([...boxes, boxColor]);
      setBoxColor("");
    }
  
    return (
      <div>
        <form onSubmit={(event) => createBox(event)}>
          <label>Color</label>
          {/* the event is the onChange, target is the input, the value is whatever input the user is putting in */}
          <input onChange={(e) => setBoxColor(e.target.value)} type="text" name="color" value={boxColor}/>
        {/* When the user clicks on Add button, it will trigger the onSubmit which will use the CreateBox function, which is where we have access to the new box color  */}
          <button>Add</button>
        </form>
    </div>
    );
}

export default Form;