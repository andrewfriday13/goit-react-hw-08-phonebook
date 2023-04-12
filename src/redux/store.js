import { combineReducers, configureStore } from "@reduxjs/toolkit"



import { contactsReducer } from "./contacts/contacstSlice"
import { filterReducer } from "./filter/filterSlice";





const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,

})


 export const store =configureStore({
    reducer: rootReducer
 },
 )

