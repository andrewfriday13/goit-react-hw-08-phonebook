import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL ='https://connections-api.herokuapp.com'

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset(){
        axios.defaults.headers.common.Authorization = ``

    }
}

export const register = createAsyncThunk('user/register', 
async credentials => {
    try{
        console.log(credentials)
        const {data} = await axios.post('/users/signup', credentials)
        token.set(data.token)
        return data
    }catch(e){
        console.log(e.message)
    }
}
)

export const logIn = createAsyncThunk('user/login', 
async credentials => {
    try{
        const {data} = await axios.post('/users/login', credentials)
        token.set(data.token)
        return data
    }catch(e){
        console.log(e.message)
    }
}
)
export const logOut = createAsyncThunk('user/logout', 
async () => {
    try{
        await axios.post('/users/logout')
        token.unset()
    }catch(e){
        console.log(e.message)
    }
}
)