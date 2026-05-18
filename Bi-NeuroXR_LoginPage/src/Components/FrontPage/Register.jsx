import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'

const Register = ({ onFlip }) => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  //supabase use states
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async () => {
    if(password!== confirmPassword){
        alert('Password does not match')
        return
    }
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {data: {username}}
  })

  if (error) {
    alert(error.message)
  } else {
    navigate('/dashboard')

    }
  }

  return (
     <div className='wrapper-register'>
        <div className='form-box_login'>

            <h2>Register</h2>
            <form action="#">

                 <div className='input-box1'>
                    <span className='icon'>
                        <ion-icon name="person-sharp"></ion-icon>
                    </span>

                    <input 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    >
                    </input>
                    <label>Username</label>
                  </div>

                    <div className='input-box1'>
                        <span className='icon'>
                            <ion-icon name="mail-sharp"></ion-icon>
                        </span>

                        <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>
            
                    <div className='input-box2'>
                        <span className='icon' onClick={() => setShowPassword(!showPassword)}>
                            <ion-icon name={showPassword ? 'eye-sharp' : 'eye-off-sharp' } ></ion-icon>
                        </span>

                        <input 
                        type={showPassword ? 'text' : 'password' }
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                    </div>

                    <div className='input-box1'>
                        <input 
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label>Confirm password</label>
                    </div>

                    <button 
                    className = "btn"
                    type='button'
                    onClick={handleRegister}
                    >
                        Sign-up
                    </button>

                </form>
            </div>
            <div className='login-register'>                
                <p>Already have an account?
                    <button className="register-btn" onClick={onFlip}>Login</button>
                </p>
          </div>
    </div>
    
  )
}

export default Register