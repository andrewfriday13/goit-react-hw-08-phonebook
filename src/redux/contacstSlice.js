import {  createSlice } from "@reduxjs/toolkit"

import {addNumber, getContacts, removeNumber} from './operations'

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
    .addCase(removeNumber.rejected, handleRejected )
    .addCase(addNumber.rejected, handleRejected)
    .addCase(getContacts.rejected,handleRejected )
}
 
})


export const contactsReducer = contactsSlice.reducer;


//   {
//         [getContacts.pending](state, _){
//             state.isLoading = true
//         },
//         [getContacts.fulfilled](state,action){
//             state.isLoading =false
//             state.error = null
//             state.contacts = action.payload
//         },
//         [getContacts.rejected](state, action){
//             console.log(action)
//             state.isLoading =false
//             state.error = action.payload
            
//         },
//         [addNumber.pending](state, _){
//             state.isLoading = true
//         },
//         [addNumber.fulfilled](state, action){
//             state.isLoading = false
//             state.contacts.push(action.payload) 
//         },
//         [addNumber.rejected](state, action){
//             state.isLoading =false
//             state.error = action.payload
//         },
//         [removeNumber.pending](state,_){
//             state.isLoading = true
//         },
//         [removeNumber.fulfilled](state,action){
//             state.isLoading = false
//             state.error= null
//             const index = state.contacts.findIndex(
//               task => task.id === action.payload.id
//             );
//             state.contacts.splice(index, 1);
//         },
//         [removeNumber.rejected](state,action){
//             state.isLoading =false
//             state.error = action.payload
//         }
//     },






