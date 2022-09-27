// what we need 
// In action create action creators : 

// actions for example 1
export const increment = () => {return {type:"inc"}};

export const decrement = () => {return {type:"dec"}};

// actions for example 2
export const colorChange = (color) => {return {type:"color",payload:color}};