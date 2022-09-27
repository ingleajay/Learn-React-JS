const { createSlice } = require("@reduxjs/toolkit");

const AddUserSlice = createSlice({

    name :"Add User",

    initialState : [],

    reducers : {
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=> item.id !== action.payload);
        }
    }
})

export const {add,remove} =  AddUserSlice.actions;

export default AddUserSlice.reducer;