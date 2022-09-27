import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

//The useEffect Hook allows you to perform side effects in your components.
//Some examples of side effects are: fetching data, directly updating the DOM, and timers.
//useEffect accepts two arguments. The second argument is optional.
//useEffect(<function>, <dependency>)

// 1. No dependency passed:
// useEffect(() => {
//   //Runs on every render
// });

// 2. An empty array:
// useEffect(() => {
//   //Runs only on the first render
// }, []);

// 3. Props or state values:
// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);

const UseEffectHookEx = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

//   useEffect(()=>{
//     alert("I am clicked");
//   })

//   useEffect(()=>{
//     alert("I am clicked");
//   },[])

useEffect(()=>{
    alert("I am clicked");
  },[count])

  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>{count}</button>
    <button onClick={()=>{setCount1(count1+1)}}>{count1}</button>
    </>
  )
}

export default UseEffectHookEx