import React from 'react'
import logo_image from '/src/assets/bi-neuroxr-logo.svg'

const Loginpage = () => {
  return (
    
      <header>

          <div className='brand'>
             <img className = "logo_image" src={logo_image} alt= "img logo" />
             <h2 className='logo'>Bi-NeuroXR</h2>
          </div>

          <nav className='navigation'>
            <a href='#'>Home</a>
              <a href='#'>About</a>
                <a href='#'>Service</a>
              <a href='#'>Support</a>
            <button className='btnLogin-popup'>Login</button>
          </nav>

      </header>
  )     
}

export default Loginpage