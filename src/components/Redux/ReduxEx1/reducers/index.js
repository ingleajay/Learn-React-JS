// get all reducers here - use redux

import changeNo from "./upAndDown";


import { combineReducers } from "redux";
import colorReducer from "./changeColor";

const rootreducer = combineReducers({
    changeNo,
    colorReducer
})

export default rootreducer;

