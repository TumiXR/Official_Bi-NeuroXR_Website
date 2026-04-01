import React, { useState } from 'react'
import '../script.js'

const LoginBox = () => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='wrapper'>
        <div className='form-box_login'>

            <h2>Login</h2>
            <form action="#">

                <div className='input-box1'>

                    <span className='icon'>
                        <ion-icon name="mail-sharp"></ion-icon>
                    </span>

                    <input type='email'></input>
                    <label>Email</label>
                </div>
            
                    <div className='input-box2'>

                    <span className='icon' onClick={() => setShowPassword(!showPassword)}>
                        <ion-icon name={showPassword ? 'eye-sharp' : 'eye-off-sharp' } ></ion-icon>
                    </span>

                    <input type={showPassword ? 'text' : 'password' } ></input>
                    <label>Password</label>
                 </div>

                    <div className='remember-forgot'>

                         <label className='checkbox'>

                            <input type='checkbox'></input>
                                Remember me 

                        </label>

                            <a href='#'> Forgot Password? </a>

                    </div>

                        <button className = "btn" type='submit'>Log-In</button>

                            <div className='login-register'>
                                 <p>Don't have an account?
                                     <a className="register-link" href='#'> Register</a>
                                </p>
                            </div>

            </form>

        </div>
    </div>
  )
}

export default LoginBox