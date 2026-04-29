import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../supabase"

const Login_btn = () => {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
              setIsLoggedIn(!!session)
            })
    
       const {data: listener} = supabase.auth.onAuthStateChange((_event, session) =>
      {
        setIsLoggedIn(!!session)

      })
    
        return () => listener.subscription.unsubscribe()

  },[])

  return (
    <>
 
      {isLoggedIn ? (
        <div className="nav-icons">
          <ion-icon name="cart-sharp"></ion-icon>
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