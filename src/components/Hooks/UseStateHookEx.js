import React from 'react'
import { useState } from 'react'

//The React useState Hook allows us to track state in a function component.
//State generally refers to data or properties that need to be tracking in an application.

const UseStateHookEx = () => {

  const [count,setCount] = useState(0);  

  return (
    <>
    <h4>Use State : {count}</h4>
    <button onClick={()=>{setCount(count+1)}}>Incr</button>
    <button onClick={()=>{setCount(count-1)}}>Decr</button>
    </>
  )
}

export default UseStateHookEx