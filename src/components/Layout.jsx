import { Suspense } from "react"

import { Outlet } from "react-router-dom"
import { Navigations } from "./navigation/navigation"
import { UserMenu } from "./userMenu/userMenu"
import { Autorization } from "./autorization/autorization"
import { useSelector } from "react-redux"
import { isLogin } from "redux/auth/auth-selectors"
import css from './Layout.module.css'
 const Layout = () => {

const inSystem = useSelector(isLogin)

    return(
        <>
            <div className={css.headerStyle}>
             <Navigations/>
             {inSystem ? <UserMenu/> : <Autorization/>}
             </div>
            <Suspense>
                <Outlet/>
            </Suspense>
        </>
    )
}
export default Layout