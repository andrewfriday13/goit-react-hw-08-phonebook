
import { NavLink } from "react-router-dom"

import css from './navigation.module.css'



export const Navigations =()=>{

    return(
        <nav className={css.navigations__component}>
            <NavLink 
                className={css.navigations} 
                to='/'
                >Home</NavLink>

            <NavLink 
                className={css.navigations} 
                to='/contacts'
            >Contacts</NavLink>
        </nav>
    )
}