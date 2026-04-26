import { Link } from 'react-router-dom'
import logo_image from '/src/assets/bi-neuroxr-logo.svg'
import Login_btn from './Login_btn'

const Loginpage = () => {
  return (
    
      <header>

          <div className='brand'>
             <img className = "logo_image" src={logo_image} alt= "img logo" />
             <h2 className='logo'>Bi-NeuroXR.</h2>
          </div>

          <nav className='navigation'>
            <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
                <Link to='/service'>Service</Link>
              <Link to='/support'>Support</Link>
            <Login_btn />
          </nav>

      </header>
  )     
}

export default Loginpage