import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { colorChange } from './actions';

// change text color
const Example2 = () => {

 const [color, setColor] = useState();
 const myState = useSelector((state) => state.colorReducer);
 const dispatch = useDispatch();

 const colorHandler = (event) => {
    setColor(event.target.value);
 }

  return (
    <div>
        Example2 : change text color
        <input  type="text" onChange={colorHandler}/>
        <button onClick={()=>dispatch(colorChange(color))}>Change me</button>
        <h5 style={{color:`${myState}`}}>Data : I am in {color}</h5>
    </div>
  )
}

export default Example2