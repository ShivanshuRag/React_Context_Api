
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile.jsx'
import USerContextProvider from './Context/USerContextProvider.jsx'

function App() {
  

  return (
   <>
    <h2 className='text-red-500  '>Hello</h2>
    <USerContextProvider >
    
    <Login/>
    <Profile/>
    </USerContextProvider>

   </>
  )
}

export default App
