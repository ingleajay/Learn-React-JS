import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment , decrement} from './actions';

// inc and dec to number
const Example1 = () => {

  const myState = useSelector((state) => state.changeNo);
  const dispatch = useDispatch();
  console.log(myState)

  return (
    <>
        <h4>React redux</h4>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        Ans : {myState}
        <button onClick={() => dispatch(increment())}>Plus</button>
    </>
  )
}

export default Example1