import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {

    if (!user) {
        return <Navigate to='/store' />
    }

    return <Outlet/>
}


export default ProtectedRoutes