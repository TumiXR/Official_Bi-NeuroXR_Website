import { Link } from 'react-router-dom'
import {supabase} from "../../supabase"
import { useState } from 'react'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleForgotPassword = async () => {
    const {error} = await supabase.auth.resetPasswordForEmail(email,{
        redirectTo: "http://localhost:5173/reset-password"
    })
    if (error) {
        console.error(error.message)
    } else {
        console.log('reset email sent!')
      }
    }
  return ( 
    <div className='wrapper-Forgot'>
        <div className='form-box_forgot'>
            <h2>Forgot Password</h2>
                <div className='input-box-forgot'>
                    <span className='icon'>
                        <ion-icon name="mail-sharp"></ion-icon>
                    </span>

                    <input 
                    type='email'
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Enter your Email</label>
                </div>
            
                <button 
                className = "btn" 
                type='button'
                onClick={handleForgotPassword}
                >
                    Submit
                </button>

            <div className='Remember-login'>
                <p>Remembered your password? <Link to='/' className='forgot-link'>Login</Link></p>
            </div>    
        </div>
    </div>
  )
}

export default ForgotPassword