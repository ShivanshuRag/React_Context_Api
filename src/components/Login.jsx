 import { useContext  , useState} from "react"
 import UserContext from "../Context/UserContext"
export default function Login() {
 const { setUser} = useContext(UserContext)
  
  const [userName, setUserName] = useState(null)
  const [password , setPassword] = useState(null)

    const login = (e) => {
      e.preventDefault()
      setUser(userName , password)  
    }
  return (
    <div>
     <h1 className="text-3xl font-bold underline">Login</h1>
      <input
       type="text"
       value={userName}
       onChange={(e)=> setUserName(e.target.value)}
       placeholder="UserName"
       />
         {"  "}
         {""}
       <input 
       type="text" 
       value={password}
       onChange={(e)=> setPassword(e.target.value)}
       placeholder="Password"
       />
       <button
       onClick={login}
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
    </div>
  )
}

