import React from 'react'
import { useRef } from 'react';

// If we don’t to use useState hook you can use useRef like with useState you will have 
// to write more code but if you want to only read data and not to change anything then you can go with useref
// Here it is uncontrolled components because it’s not controlled by react cause you set value like 
// normally not by state so it’s not good but benefit like has less code

//useRef() only returns one item. It returns an Object called current.
//When we initialize useRef we set the initial value: useRef(0).

const UseRefHookEx = () => {

  const ename = useRef();
  const eage = useRef();

  const displayData = () => { 
    console.log(ename.current.value + " " + eage.current.value);
  }
    
  return (
    <div>
        <input 
         type="text" ref={ename}/>
         <label>Add Age</label>
         <input 
         type="number"  ref={eage}/>
         <button onClick={displayData}>Focus Input</button>
    </div>
  )
}

export default UseRefHookEx