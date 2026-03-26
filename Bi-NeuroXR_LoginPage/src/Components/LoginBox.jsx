import React from 'react'
import '../script.js'

const LoginBox = () => {
  return (
    <div className='wrapper'>
        <div className='form-box login'>

            <h2>Login</h2>
            <form action="#"></form>

            <div className='input-box'>
                <span className='icon'>
                    <ion-icon name = 'mail'></ion-icon>
                </span>
                <input type='email'></input>
                <label>Email</label>
            </div>
            
            <div className='input-box'>
                <span className='icon'>
                     <ion-icon name = 'lock-closed'></ion-icon>
                </span>
                <input type='Password'></input>
                <label>Password</label>
            </div>

            <div className='remember-forgot'>

                <label className='checkbox'>
                    <input type='checkbox'></input>
                    Remember me <a href='#'>Forgot Password?</a>

                </label>

            </div>

            <button className = "btn" type='submit'>Log-In</button>

            <div className='login-register'>
                <p>Don't have an account?
                    <a className="register-link" href='#'></a></p>
            </div>

        </div>
    </div>
  )
}

export default LoginBox