import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/auth-operations"
import { userEmail } from "redux/auth/auth-selectors"
import css from './userMenu.module.css'


export const UserMenu =()=>{
    const user =useSelector(userEmail)
    const dispatch =useDispatch()

    const LogOut = () => {
        dispatch(logOut())
    }
    return(
        <div className={css.userInfo}>
            <p>{user}</p>
            <button className={css.logOut} onClick={LogOut}>Log Out</button>
        </div>
    )
}