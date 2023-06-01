import React from 'react'
import { Navigate, Outlet, } from 'react-router-dom'

const ProtectedRoutes = ({ user, children, redirectTo = '/home' }) => {

    if (user.is_admin === false) {
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />
}


export default ProtectedRoutes