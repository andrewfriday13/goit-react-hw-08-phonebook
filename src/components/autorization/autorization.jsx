import { NavLink } from "react-router-dom"
import css from '../navigation/navigation.module.css'


export const Autorization = () => {

    return(
    <div className={css.navigations__component} >
        <NavLink  className={css.navigations} to='/login'>LogIn</NavLink>
        <NavLink  className={css.navigations} to='/register' >Register</NavLink>
    </div>
    )
}