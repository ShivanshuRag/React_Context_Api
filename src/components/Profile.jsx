 import { useContext } from "react"
import UserContext from "../Context/UserContext"

export default function Profile() {

    const {user} = useContext(UserContext)
   if(!user){
    return (<div className="text-3xl font-bold underline">Login</div>)
}else{
    return (<div className="text-3xl font-bold underline">{`Welcome ${user}`}</div>)
}
}