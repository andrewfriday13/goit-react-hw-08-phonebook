
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { isLogin } from "redux/auth/auth-selectors";




export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(isLogin) 
  
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  };