import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from './store/TextColorSlice';

const Example12 = () => {

    const [color, setColor] = useState();
    const myState = useSelector((state) => state.change);
    const dispatch = useDispatch();

    const colorHandler = (event) => {
        setColor(event.target.value);
    }

    return (
        <div>
            Example2 : change text color
            <input  type="text" onChange={colorHandler}/>
            <button onClick={()=>dispatch(changeColor(color))}>Change me</button>
            <h5 style={{color:`${myState}`}}>Data : I am in India</h5>
        </div>
      )
}

export default Example12