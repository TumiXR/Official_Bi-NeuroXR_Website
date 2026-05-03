import { useEffect, useState } from "react"
import LoginForm from './LoginBox'
import RegisterForm from "./Register"
import { supabase } from "../supabase"
import { useNavigate } from "react-router-dom"


const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: {session}}) =>{
            if (session) navigate('/dashboard')
        })
    },[navigate])

  return (
    <div className='Card-Container'>
        <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>

            <div className='card-front'>
                <div className="wrapper-login">
                <LoginForm onFlip={() => setIsFlipped(true)} />
                </div>
            </div>

            <div className='card-back'>
                <div className="wrapper-register">
                <RegisterForm onFlip={() => setIsFlipped(false)}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardFlip