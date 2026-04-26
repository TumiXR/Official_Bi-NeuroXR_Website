import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='wrapper-Forgot'>
        <div className='form-box_forgot'>
            <h2>Forgot Password</h2>
                <div className='input-box-forgot'>
                    <span className='icon'>
                        <ion-icon name="mail-sharp"></ion-icon>
                    </span>

                    <input type='email'></input>
                    <label>Enter your Email</label>
                </div>
            
                <button className = "btn" type='submit'>Submit</button>

            <div className='Remember-login'>
                <p>Remembered your password? <Link to='/' className='forgot-link'>Login</Link></p>
            </div>    
        </div>
    </div>
  )
}

export default ForgotPassword