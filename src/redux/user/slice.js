import { createSlice } from '@reduxjs/toolkit';

//inicializando 
const initialState = {
    user: null,
    users: [],
    loading: false,
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
        },

        addAddress: (state, action) => {
            if(action.payload.location === '' || action.payload.number === ''){
                alert("Preencha todos os campos")
                return{...state}
            }

            if(state.user === null){
                alert("Faça login para cadastrar um endereço")
                return{ ...state }
            }

            console.log({
                location: action.payload.location,
                number: action.payload.number,
            })

            return{
                ...state,
                user:{
                    ...state.user,
                    address:{
                        location: action.payload.location,
                        number: action.payload.number,
                    }
                }
            }
        },

        deleteAddress: (state) => {
            return{
                ...state,
                user:{
                    ...state.user,
                    address: null
                }
            }
        },

        fetchUsers: (state) => {
            state.loading = true
        },
        fetchUsersSuccess: (state, action) => {
            //console.log(action.payload)

            state.users = action.payload;
            state.loading = false;
        },
        fetchUsersFailure: (state, action) => {
            console.log("Caiu na failure")
            console.log(action.payload)
            state.loading = false;
        },

        fetchUserById:  () => {
            console.log("Chamou no slice fetchUserByid")
        },
        fetchUserByIdSucess: (state, action) => {
            console.log("user do id")
            console.log(action.payload)
        },
        fetchUserByIdFailure: (state) => {
            console.log("Erro no fetchUserById")
        }

    }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers, fetchUsersSuccess, fetchUsersFailure, fetchUserById, fetchUserByIdSucess, fetchUserByIdFailure } = userSlice.actions;

export default userSlice.reducer;