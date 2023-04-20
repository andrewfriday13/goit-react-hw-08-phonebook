import { combineReducers, configureStore } from "@reduxjs/toolkit"



import { contactsReducer } from "./contacts/contacstSlice"
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";




const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer,
})


 export const store =configureStore({
    reducer: rootReducer
 },
 )

