import React from 'react'
import heroVideo from '../../assets/heroBar.mp4'

const heroBar = () => {
  return (
    <div className='heroVideo'>
        <video autoPlay muted playsInline>
            <source src={heroVideo} type = 'video/mp4' />

        </video>
    </div>
  )
}

export default heroBar