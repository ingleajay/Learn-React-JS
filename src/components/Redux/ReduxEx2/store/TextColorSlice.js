import { createSlice } from "@reduxjs/toolkit";

const TextColorSlice = createSlice({

    name:'color-change',

    initialState:"blue",

    reducers: {

        changeColor(state,action){
            state = action.payload;
            return state;
        }
    }
}) 

export const {changeColor} = TextColorSlice.actions;

export default TextColorSlice.reducer;