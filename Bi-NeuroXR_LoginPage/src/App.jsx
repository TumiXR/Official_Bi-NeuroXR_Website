import './style.css'
import { Routes, Route  } from "react-router-dom"
import NavBar from './Components/NavBar'
import CardFlip from './Components/CardFlip.jsx'
import ForgotPassword from "./Components/ForgotPassword"
import Service from './Components/Service.jsx'
import About from './Components/About.jsx'
import Support from './Components/Support.jsx'

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CardFlip />} />
        <Route path='/login-page' element={<CardFlip />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/support' element={<Support />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </>

  )
}

export default App