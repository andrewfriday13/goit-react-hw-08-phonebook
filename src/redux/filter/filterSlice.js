const { createSlice } = require("@reduxjs/toolkit");




const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers:{
        searchContacts(_, {payload}){
            return payload
        }
    }
})
export const {searchContacts} = filterSlice.actions
export const filterReducer =filterSlice.reducer