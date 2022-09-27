import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

// The React useMemo Hook returns a memoized value.
// The useMemo Hook only runs when one of its dependencies update. This can improve performance.
// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

const UseMemoHook = () => {

  const [val,setValue] = useState(0);  

  const countNo = (val) => {
    console.log("Your val : " , val);
    for(let i=0;i<=1000000000;i++){}
    return val;
  }

  // prevoius 
  // const cheked = countNo(val);

 // update code with memo : 
 
 const cheked = useMemo(()=>{
    return countNo(val);
 },[val]);


 const [show,setShow] = useState(true);

  return (
    <div>
        <button onClick={()=>{setValue(val+1)}}>Click {val}</button>
        <h4>Your val :  {cheked}</h4>
        <button onClick={()=>setShow(!show)}>{show ? "cliked me" : "not cliked me"}</button>

    </div>
  )
}

export default UseMemoHook