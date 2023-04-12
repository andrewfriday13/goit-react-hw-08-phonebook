import { Autorization } from "../autorization/autorization"
import { Navigations } from "../navigation/navigation"
import { UserMenu } from "../userMenu/authNav"



export const AppBar =()=>{

    return<>
    <Navigations/>
     <UserMenu/> 
     <Autorization/>
    </>
}