import { logIn, logOut, register } from "./auth-operations"

const { createSlice } = require("@reduxjs/toolkit")




const initialState ={
     user : null,
     token: null,
     inSystem: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.inSystem = true
        })
        .addCase(logIn.fulfilled, (state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
            state.inSystem = true

        })
        .addCase(logOut.fulfilled, state =>{
            state.user = null
            state.token = null
            state.inSystem =false
            // state = initialState 
        })
    }

})

export const authReducer = authSlice.reducer
