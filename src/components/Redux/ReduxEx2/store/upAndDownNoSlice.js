import { createSlice } from "@reduxjs/toolkit";


const upAndDownNoSlice = createSlice({

    name:'upAndDown',

    initialState:0,

    reducers:{
        increment(state,action){
            return state+1;
        }
        ,
        decrement(state,action){
            return state-1;
        }
    }

})

export const {increment,decrement} = upAndDownNoSlice.actions;

export default upAndDownNoSlice.reducer;