import {  createSlice } from "@reduxjs/toolkit"

import {addNumber, getContacts, removeNumber} from './operationsContacts'
import { logOut } from "redux/auth/auth-operations"

const handlePenging = state =>{
     state.isLoading = true
    }
const handleRejected =(state,action) =>{
     state.isLoading =false
    state.error = action.payload}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
            contacts: [],
            isLoading: false,
            error: null
          
    },
    extraReducers: builder => {
        builder
        .addCase(getContacts.pending, (state,action)=>{
        state.isLoading =false
        state.error = null
    })
    .addCase(removeNumber.pending, handlePenging)
    .addCase(addNumber.pending, handlePenging)
    
    .addCase(getContacts.fulfilled,(state,action)=>{
        state.isLoading =false
        state.error = null
        state.contacts = action.payload
    })
    .addCase(addNumber.fulfilled, (state, action)=>{
        state.isLoading = false
        state.contacts.push(action.payload)
    })
    .addCase(removeNumber.fulfilled,(state,action)=>{
        state.isLoading = false
        state.error= null
        const index = state.contacts.findIndex(
          task => task.id === action.payload.id
        );
        state.contacts.splice(index, 1);
    })
    .addCase(logOut.fulfilled, state => {
        state.contacts = []
    })
    .addCase(logOut.rejected, handleRejected )
    .addCase(removeNumber.rejected, handleRejected )
    .addCase(addNumber.rejected, handleRejected)
    .addCase(getContacts.rejected,handleRejected )
}
 
})


export const contactsReducer = contactsSlice.reducer;


