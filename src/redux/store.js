import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';



import { contactsReducer } from "./contacts/contacstSlice"
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from "./auth/authSlice";
import { persistStore } from "redux-persist";


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(persistConfig, authReducer)
  
})



  const store =configureStore({
    reducer: rootReducer
 },
 )
export default store;


export const persistor = persistStore(store)