/* eslint-disable react/prop-types */

import { useState } from "react"
import UserContext from "./UserContext"
function USerContextProvider({children}) {

    const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={ {user , setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default USerContextProvider