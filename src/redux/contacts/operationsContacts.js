import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com'


 export const getContacts = createAsyncThunk('contacts/all',
    async ( thunkAPI)=>{

        try{
            const response = await axios.get("/contacts")
            return response.data
        }catch({message}){
           return thunkAPI.rejectWithValue(message)
        }

})

export const addNumber = createAsyncThunk('contacts/add',
    async (data, thunkAPI)=>{
    try{
        const response = await axios.post('/contacts', {...data})
        return response.data
    }catch({message}){
        return thunkAPI.rejectWithValue(message)
    }
    }
)

export const removeNumber = createAsyncThunk('contacts/remove',
async (dataId, thunkAPI)=>{
    try{
        const response = await axios.delete(`/contacts/${dataId}`)
        return  response.data
    }catch({message}){
        return thunkAPI.rejectWithValue(message)
    }
})