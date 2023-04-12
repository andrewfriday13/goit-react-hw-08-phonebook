import { Suspense } from "react"
import { AppBar } from "./appBar/appBar"
import { Outlet } from "react-router-dom"

export const Layout = () => {


    return(
        <div>
            <AppBar/>
            <Suspense>
                <Outlet/>
            </Suspense>
        </div>
    )
}