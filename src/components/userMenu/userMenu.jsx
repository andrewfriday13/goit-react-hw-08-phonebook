import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/auth-operations"
import { userName } from "redux/auth/auth-selectors"



export const UserMenu =()=>{
    const name =useSelector(userName)
    const dispatch =useDispatch()

    const out = () => {
        dispatch(logOut())
    }

    return(
        <div>
            <p>{name}</p>
            <button onClick={out}>Log Out</button>
        </div>
    )
}