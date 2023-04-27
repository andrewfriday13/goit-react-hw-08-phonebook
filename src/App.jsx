import {  useDispatch } from 'react-redux';
import {  Suspense, lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';


import { refreshUser } from 'redux/auth/auth-operations';
import { PublicRoute } from './components/PublicRoute.js';
import { PrivateRoute } from './components/PrivateRoute.jsx';




const Layout = lazy(() => import('./components/Layout.jsx'));
const Home = lazy(() => import('pages/home/home'));
const Contact = lazy(() => import('pages/contacts/contactsPage'));
const LoginForm = lazy(() => import('pages/login/loginForm'));
const RegisterForm = lazy(() => import('pages/register/registerForm'));


export const App = () => {
   const dispatch = useDispatch()  



  useEffect(()=>{
    dispatch(refreshUser())
  },[dispatch])

  
  return(

<Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterForm/>}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<LoginForm/>}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Contact/>}
              />
            }
          />
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

