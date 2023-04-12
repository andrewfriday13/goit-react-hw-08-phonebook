import { NavLink } from "react-router-dom"



export const Navigations =()=>{

    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            {true && (<NavLink to='/contacts'>Contacts</NavLink>)}
        </nav>
    )
}