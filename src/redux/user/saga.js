import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects';
import {fetchUsersSuccess, fetchUsersFailure, fetchUserByIdFailure, fetchUserByIdSucess} from './slice';

import axios from 'axios';
//API USERS: https://jsonplaceholder.typicode.com/users/

//* na função por que é assincrona
function* fetchUsers(){
    try{

        yield delay(2000)

        //yield - esperar a requisiçao
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSuccess(response.data))

    }catch(error){
        yield put(fetchUsersFailure(error.message))
    }
}

function* fetchUserById(action){
    try{
        const userId = action.payload;
        const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
        yield put(fetchUserByIdSucess(response.data))

    }catch(error){
        yield put(fetchUserByIdFailure(error.message))
    }
}

export default all([
   // takeEvery("user/fetchUsers", fetchUsers ) sempre é chamado
   takeLatest("user/fetchUsers", fetchUsers ),//pega apenas a ultima ação do usuario
   takeLatest("user/fetchUserById", fetchUserById )//pega apenas a ultima ação do usuario
])