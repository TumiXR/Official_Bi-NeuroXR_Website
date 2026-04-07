import { useState } from 'react'

const Register = ({ onFlip }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
     <div className='wrapper-registor'>
        <div className='form-box_login'>

            <h2>Registor</h2>
            <form action="#">

                 <div className='input-box1'>

                    <span className='icon'>
                        <ion-icon name="person-sharp"></ion-icon>
                    </span>

                    <input type='User'></input>
                    <label>Username</label>
                  </div>

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

                <div className='input-box1'>
                    <input type={showPassword ? 'text' : 'password' } ></input>
                    <label>Password</label>
                </div>

                <button className = "btn" type='submit'>Sign-in</button>
            </form>
        </div>
          <div className='sign-in_register'>                
                <p>Already have an account?
                  <button className="register-btn" onClick={onFlip}>Login</button>
              </p>
          </div>
    </div>
    
  )
}

export default Register