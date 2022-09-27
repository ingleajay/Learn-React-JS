import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({

    name:'Book Slice',

    initialState : []
    ,
    reducers : { 
        addBook(state,action){
            state.push(action.payload);
        }
    }
})

export const {addBook} = BookSlice.actions;

export default BookSlice.reducer;