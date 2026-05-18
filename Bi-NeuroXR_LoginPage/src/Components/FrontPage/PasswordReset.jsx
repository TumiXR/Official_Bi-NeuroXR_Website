import React from 'react'
import {supabase} from '../../supabase'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const PasswordReset = () => {
const [password, setPassword] = useState('')
const [newPassword, setNewPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [sessionReady, setSessionReady] = useState(false)
const navigate = useNavigate()

const handleResetPassword = async () => {
    if (!sessionReady) {
        alert('Session not ready, please try again later')
    return
    }

    if (password!==confirmPassword) {
        alert('password does not match')
    return
    }
    const { error } = await supabase.auth.updateUser ({
        password: newPassword
    })

    if (error) {
        alert(error.message)
    } else {
        alert('password updated!')
        await supabase.auth.signOut()
        setTimeout(() => navigate('/login-page'), 2000)
    }
}

//supabase forgot password callback
    useEffect(() => {
    const {data: {subscription}} = supabase.auth.onAuthStateChange((event, session) => {
            if(event ==='PASSWORD_RECOVERY') {
                setSessionReady(true)
        }        
        })
        return () => subscription.unsubscribe()
    },[])


  return (
    <div className='wrapper-Forgot'>
        <div className='form-box_forgot'>
            <h2>Reset Password</h2>
                <div className='input-box-forgot'>
                    <span className='icon'>
                        <ion-icon name="lock-sharp"></ion-icon>
                    </span>

                    <input 
                    type='password'
                    value= {password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label> New Password </label>
                </div>

            <div className='input-box2'>
                <input
                type='password'
                value= {confirmPassword}
                onChange= {(e) => setConfirmPassword(e.target.value)}
                
                />
                <label> Confirm Password </label>
            </div>
            
                <button 
                className = "btn" 
                type='button'
                onClick={handleResetPassword}
                >
                    Reset
                </button>
        </div>
    </div>
  )
}

export default PasswordReset