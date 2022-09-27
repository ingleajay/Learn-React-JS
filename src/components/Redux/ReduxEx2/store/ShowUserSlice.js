const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUS = Object.freeze({
    IDLE : 'idle',
    ERROR : 'error',
    LOADING : 'loading'
})

const ShowUserSlice = createSlice({
    name : 'users',
    initialState : {
        data : [],
        status : STATUS.IDLE
    },
    reducers:{
        // setUsers(state,action) {
        //         state.data = action.payload;
        // },
        // setStatus(state,action) {
        //     state.status = action.payload;
        // }
    }   ,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchUsers.pending,(state,action)=>{
                state.status = STATUS.LOADING;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = STATUS.IDLE;
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status = STATUS.ERROR;
        })
    }
})

// create thunks to call ApI in reducer
// export function fetchUsers(){
//     return async function fetchUsersThunk(dispatch,getState){
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const res = await fetch('https://jsonplaceholder.typicode.com/users');
//             const data = await res.json();
//             dispatch(setUsers(data));
//             dispatch(setStatus(STATUS.IDLE))
//         } catch (error) {
//             console.log("Errror : " + error)
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }
// }

// Or another method
export const fetchUsers = createAsyncThunk('users/fetch',async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
})

export const {setUsers,setStatus} =  ShowUserSlice.actions;

export default ShowUserSlice.reducer;