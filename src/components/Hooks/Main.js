import React from 'react'
import { UseCallbackHook } from './UseCallbackHook'
import C1 from './UseContextHookEx'
import UseEffectHookEx from './UseEffectHookEx'
import UseLayoutEffectHook from './UseLayoutEffectHook'
import UseMemoHook from './UseMemoHook'
import { Todos, UseReducerHookEx } from './UseReducerHookEx'
import UseRefHookEx from './UseRefHookEx'
import UseStateHookEx from './UseStateHookEx'

const Main = () => {
  return (
    <>
    
    <UseRefHookEx/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>

    <UseEffectHookEx/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>

    <UseStateHookEx/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>

    <UseReducerHookEx/>
    <Todos/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>

    <C1/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>
    
    <UseMemoHook/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>
    
    <UseCallbackHook/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>
    
    <UseLayoutEffectHook/>
    <h2>----------------------------------------------------------------------------------------------------------------------</h2>

    </>
  )
}

export default Main