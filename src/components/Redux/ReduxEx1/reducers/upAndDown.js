// how actions perform

const initialState = 0;
const changeNo = (state=initialState,action)=>{

    switch(action.type){
        case "inc" : return state+1;
        case "dec" : return state-1;
        default : return state;
    }
}

export default changeNo;