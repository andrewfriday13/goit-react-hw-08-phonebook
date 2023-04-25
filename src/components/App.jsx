import {  useDispatch, useSelector } from 'react-redux';
import {  Suspense, lazy, useEffect } from 'react';
import { getContacts } from 'redux/contacts/operationsContacts';
import { Route, Routes } from 'react-router-dom';


import { isLogin } from 'redux/auth/auth-selectors';
import { refreshUser } from 'redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';



const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('pages/home/home'));
const Contact = lazy(() => import('pages/contacts/contactsPage'));
const LoginForm = lazy(() => import('pages/login/loginForm'));
const RegisterForm = lazy(() => import('pages/register/registerForm'));


export const App = () => {
   const dispatch = useDispatch()  

   const inSystem = useSelector(isLogin)

  useEffect(()=>{
    dispatch(refreshUser())
  },[dispatch])

  
  return(

<Suspense>
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/register' element={!inSystem && <RegisterForm/>}/>
    <Route path='/login' element={!inSystem&&<LoginForm/>}/>

    <Route path='/contacts' element={
      <PrivateRoute redirectTo='/contacts' component={<Contact/>}/>
    }/>
    {/* <PrivateRoute  path='/contacts' >
      <Contact/>
    </PrivateRoute> */}
  </Route>
</Routes>
</Suspense>
  )
}

