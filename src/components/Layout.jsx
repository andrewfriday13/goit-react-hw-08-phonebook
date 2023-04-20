import { Suspense } from "react"

import { Outlet } from "react-router-dom"
import { Navigations } from "./navigation/navigation"
import { UserMenu } from "./userMenu/userMenu"
import { Autorization } from "./autorization/autorization"
import { useSelector } from "react-redux"
import { isLogin } from "redux/auth/auth-selectors"

 const Layout = () => {

const inSystem = useSelector(isLogin)

    return(
        <div>
             <Navigations/>
             {inSystem ? <UserMenu/> : <Autorization/>}
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}
export default Layout