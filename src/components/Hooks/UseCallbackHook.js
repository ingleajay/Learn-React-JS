import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

// The React useCallback Hook returns a memoized callback function.
//This allows us to isolate resource intensive functions so that they will not automatically run on every render.
//The useCallback Hook only runs when one of its dependencies update.
//This can improve performance.

const UseCallbackHook = () => {

  const [diary,setDiary] = useState([]);
  const [val,setVal] = useState(0);
  
  const addDiary = useCallback(()=>{
    setDiary((prev)=>[...prev,'new Entry']);
  },[diary]);

  const setValue = () => {
    setVal(val+1);
  }

  return (
    <div>
        <Diary diary={diary} addDiary={addDiary}/>
        <h4>{val}</h4>
        <button onClick={()=>setValue()}>Click</button>
    </div>
  )
}

const Diary = ({diary ,addDiary}) => {
    console.log("Child render...")
    return(
        <>
       <h2>My Diary</h2>
      {diary.map((entry, index) => {
        return <p key={index}>{entry + "" +   index}</p>;
      })}
      <button onClick={addDiary}>Add Todo</button>
        </>
    )
}

export {UseCallbackHook,Diary}