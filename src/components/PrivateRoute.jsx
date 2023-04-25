
import { isLogin } from "redux/auth/auth-selectors"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ component: Component, redirectTo='/'}) => {
  const inSystem = useSelector(isLogin);


  return !inSystem ? <Navigate to={redirectTo}/> : Component
};

export default PrivateRoute;
