import { createSlice } from '@reduxjs/toolkit';

//inicializando 
const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    }
})

export default userSlice.reducer;