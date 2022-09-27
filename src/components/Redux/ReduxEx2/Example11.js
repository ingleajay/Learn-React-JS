import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './store/upAndDownNoSlice';

const Example11 = () => {

  const myState = useSelector((state)=>state.no);
  const dispatch = useDispatch();

  return (
    <>
        <h4>React Tool kit redux</h4>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        Ans : {myState}
        <button onClick={() => dispatch(increment())}>Plus</button>
    </>
  )
}

export default Example11