import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

// React Context is a way to manage state globally.
//State should be held by the highest parent component in the stack that requires access to the state.
//To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
// c1 (parent), c2, c3, c4,c5 => you need data from parent to c5 so use context rather than passing all props in all child.

const UserContext = createContext();

const C1 = () => {
    const [user, setUser] = useState("Ajay Ingle");
    return (
        <UserContext.Provider value={user}>
           <h5>Use Context : {`Hello ${user}`}</h5>
           <C2/>
        </UserContext.Provider>
    );
}

const C2 = () => {
    return (
        <>
            <h5>I am C2...</h5>
            <C3/>
        </>
    );
}

const C3 = () => {
    return (
        <>
            <h5>I am C3...</h5>
            <C4/>
        </>
    );
}

const C4 = () => {
    return (
        <>
            <h5>I am C4...</h5>
            <C5/>
        </>
    );
}

const C5 = () => {
    const user = useContext(UserContext);
    return (
        <>
          <h6>Component 5</h6>
          <h4>{`Hello ${user} again!`}</h4>
        </>
      );
}


export default C1;