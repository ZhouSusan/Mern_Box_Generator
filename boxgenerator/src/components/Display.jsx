import React, {useState} from 'react';

const Display = (props) => {
    return (
        <div style={{display:"flex"}}>
        {
            props.boxes.map((color, i) => {
                return <div key={i} style={{backgroundColor: color, width: 200, height: 200, marginRight: 10}}>
                </div>
            })
        }
        </div>
    )
}

export default Display;