import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin } from 'redux/auth/auth-selectors';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(isLogin)
  const shouldRedirect = !isLoggedIn ;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};