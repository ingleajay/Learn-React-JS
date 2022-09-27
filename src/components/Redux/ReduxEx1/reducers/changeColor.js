import { color } from "../actions";

const initialState = "red";

const colorReducer = (state=initialState,action) => {
   switch(action.type){
        case "color" : {
            state = action.payload;
            return state;
        }
        default : return state;
   } 
}

export default colorReducer;