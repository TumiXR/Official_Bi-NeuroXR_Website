import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login_btn = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <>
 
      {isLoggedIn ? (
        <div className="nav-icons">
          <ion-icon name="cart-sharp" style={{fontsize: '24px'}}></ion-icon>
          <ion-icon name="person-circle-sharp"></ion-icon>
        </div>
    ):(
        <button className="btnLogin-popup"
        onClick={() => navigate('/login-page')}>
          Login
        </button>
    )} 
    </>
  )
}
export default Login_btn