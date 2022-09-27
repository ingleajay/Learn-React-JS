import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'

//The useReducer Hook is similar to the useState Hook.
//It allows for custom state logic.
//If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.


//useReducer(<reducer>, <initialState>)
//The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
//The useReducer Hook returns the current stateand a dispatchmethod.

// working  : we have state used manage state of variable and dispatcher is used for dispatched your actions 
// and make use by state 

// Example 1 : 
const initialState = 0;
const reducer = (state,action) => {
    if(action.type == "inc"){
        return (state+1);
    }
    if(action.type == "dec"){
        return (state-1);
    }

    return state;
}

const UseReducerHookEx = () => {

  const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
    <h4>Use Reducer : {state}</h4>
    <button onClick={()=>dispatch({type:"inc"})}>Incr</button>
    <button onClick={()=>dispatch({type:"dec"})}>Decr</button>
    </>
  )
}

// Example 2 : 
const initialTodos = [
    {
      id: 1,
      title: "Todo 1",
      complete: false,
    },
    {
      id: 2,
      title: "Todo 2",
      complete: false,
    },
];

const reducer1 = (state,action) => {
    switch (action.type) {
        case "COMPLETE":
          return state.map((todo) => {
            if (todo.id === action.id) {
              return { ...todo, complete: !todo.complete };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
    
}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer1, initialTodos);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    console.log(todos)

    return (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
}

export {UseReducerHookEx,Todos};