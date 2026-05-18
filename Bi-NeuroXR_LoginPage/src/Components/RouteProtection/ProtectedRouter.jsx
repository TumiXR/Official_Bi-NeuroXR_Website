import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../../supabase'

function ProtectedRouter({children}) {
    const [session, setSession] = useState(undefined)

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session)
        })
    },[])

    if ( session === undefined )
        return null

    return session ? children:<Navigate to="/login-page"/>
}

export default ProtectedRouter