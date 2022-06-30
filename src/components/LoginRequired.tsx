import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from 'state/hooks'

const LoginRequired = ({ children }: { children: React.ReactElement }) => {
    const location = useLocation().pathname
    const { isAuthenticated } = useAppSelector(state => state.root.auth)
    return (
        isAuthenticated ? children : <Navigate to={'/'} state={{ from: location }} replace />
    )
}

export default LoginRequired