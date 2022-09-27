import { configureStore } from "@reduxjs/toolkit";
import ModifyNumberReducer from './upAndDownNoSlice';
import TextColorReducer from "./TextColorSlice";
import WorkWithAPIReducer from "./WorkWithAPI";
import ShowUserReducer from "./ShowUserSlice";
import BookSliceReducer from "./BookSlice";

const store1 = configureStore({
    reducer:{
        no  : ModifyNumberReducer,
        change:TextColorReducer,
        add_user : WorkWithAPIReducer ,
        show_users : ShowUserReducer,
        books : BookSliceReducer,
    },
});

export default store1;