import './style.css'
import { Routes, Route  } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar.jsx'
import CardFlip from './Components/FrontPage/CardFlip.jsx'
import ForgotPassword from './Components/FrontPage/ForgotPassword.jsx'
import Service from './Components/NavBar/Service.jsx'
import About from './Components/NavBar/About.jsx'
import Support from './Components/NavBar/Support.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import ProtectedRouter from './Components/RouteProtection/ProtectedRouter.jsx'
import PasswordReset from './Components/FrontPage/PasswordReset.jsx'
import Login_btn from './Components/NavBar/Login_btn.jsx'

function App() {
  return(
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CardFlip />} />
        <Route path='/login-page' element={
          
          <CardFlip/>
      } />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/support' element={<Support />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        
        <Route path='/dashboard' element={
         <ProtectedRouter>
          <Dashboard/>
        </ProtectedRouter>
        }/>

        <Route path='/reset-password' element={<PasswordReset />} />
       
      </Routes>
    </>

  )
}

export default App