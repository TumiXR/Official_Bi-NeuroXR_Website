import React from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase'
import HeroBar from './HeroBar'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login-page')
  }

  return (

    <div>
      <h1>Dashboard</h1>

      <div className='heroVideo'>
        <HeroBar />
      </div>
        <button
          onClick={handleLogout}
        >
          logout
        </button>
    </div>

  )
}

export default Dashboard