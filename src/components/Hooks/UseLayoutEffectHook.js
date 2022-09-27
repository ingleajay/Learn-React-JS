import React from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
// The useLayoutEffect works similarly to useEffect but rather working asynchronously like useEffect hook, 
// it fires synchronously after all DOM loading is done loading. This is useful for synchronously re-rendering the DOM and  
//also to read the layout from the DOM. But to prevent blocking the page loading, we should always use useEffect hook.

// if we want to run first time without updating your components go with use layout effect

const UseLayoutEffectHook = () => {

  useEffect(()=>{
    console.log("First use effect")
  })  

  useEffect(()=>{
    console.log("Second use effect")
  })  

  useEffect(()=>{
    console.log("Third use effect")
  })  

  useLayoutEffect(() => {
    console.log("I am use layout effect...")
  })

  return (
    <div>UseLayoutEffectHook</div>
  )
}

export default UseLayoutEffectHook