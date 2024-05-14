import { createSlice } from '@reduxjs/toolkit';

//inicializando 
const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) =>{
            //console.log(action.payload)
            

            return{
                ...state,
                user:{
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,
                }
            }
        },
        logoutUser: (state) =>{
            return{
                ...state,
                user: null,
            }
        }

    }
})

export const { createUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;