import { useState } from "react"
import LoginForm from './LoginBox'
import RegisterForm from "./Register"


const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className='Card-Container'>
        <div className={`wrapper-login ${isFlipped ? 'flipped' : ''}`}>

            <div className='card-front'>
                <LoginForm onFlip={() => setIsFlipped(true)} />
            </div>

            <div className='card-back'>
                <RegisterForm onFlip={() => setIsFlipped(false)}/>
            </div>
        </div>
    </div>
  )
}

export default CardFlip