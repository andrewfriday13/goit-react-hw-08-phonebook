import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { isLogin } from "redux/auth/auth-selectors"



export const Navigations =()=>{
    const inSystem = useSelector(isLogin)
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            {inSystem && (<NavLink to='/contacts'>Contacts</NavLink>)}
        </nav>
    )
}