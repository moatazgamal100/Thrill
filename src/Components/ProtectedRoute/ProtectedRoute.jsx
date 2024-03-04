import React from 'react'
import { Navigate } from 'react-router-dom';
export default function ProtectedRoute({children}) {
    console.log(children);
    let user = localStorage.getItem('user');
    if (user === null) {
        return <Navigate to={'/login'}/>;
    }
    else {
        return children;
    }
    
}
