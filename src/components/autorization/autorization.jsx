import { NavLink } from "react-router-dom"



export const Autorization = () => {

    return(
    <div>
            <NavLink to='/login'>LogIn</NavLink>
        <NavLink to='/register' >Register</NavLink>
    </div>
    )
}