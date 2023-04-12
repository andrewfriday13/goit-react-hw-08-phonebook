import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/operations/operations';
import { Route, Routes } from 'react-router-dom';


import { Layout } from './Layout';
import Home from 'pages/home/home';
import { Contact } from 'pages/contacts/contactsPage';
import { LoginForm } from 'pages/login/loginForm';
import { RegisterForm } from 'pages/register/registerForm';




 export const App = () => {

  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(getContacts())
  },[dispatch])

  return(

<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/register' element={<RegisterForm/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/contacts' element={<Contact/>}/>
  </Route>
</Routes>

  )
}

