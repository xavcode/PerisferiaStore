import React from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const ProtectedRoutes = ({ user, children, redirectTo = '/home' }) => {

    if (!user) {
        return <Navigate to={redirectTo} />
    }

    console.log(`desde el protected: ${user}`)
    return children ? children : <Outlet />
}


export default ProtectedRoutes