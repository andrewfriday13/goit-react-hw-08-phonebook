import { logIn, logOut, refreshUser, register } from "./auth-operations"

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
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.user
            state.token = payload.token
            state.inSystem = true
        })
        .addCase(logIn.fulfilled, (state, {payload})=>{
            state.user = payload.user
            state.token = payload.token
            state.inSystem = true

        })
        .addCase(logOut.fulfilled, state => {
            state.user = null
            state.token = null
            state.inSystem =false
        }).addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.inSystem = true
        }).addCase(refreshUser.rejected, (state, action) => {
            state.user = null
            state.inSystem = false
        })
    }

})

export const authReducer = authSlice.reducer
