import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useLocation, Outlet } from "react-router-dom";
import apiClient from './api';
import AuthContext from 'Context/AuthProvider';

const Protected = () => {
    const location = useLocation();
    const [Authenticated, setAuthenticated] = useState(null);
    const { setAuth } = useContext(AuthContext)

    const checkAuthenticated = () => {
        try {
            apiClient.get(`/api/user`)
                .then(response => {
                    if (response.status === 200) {
                        setAuth(response.data)
                        setAuthenticated(true)
                    } else {
                        setAuthenticated(false)
                        setAuth({})
                    }
                })
                .catch(error => {
                    console.log(error);
                    setAuthenticated(false)
                    setAuth({})
                });
        } catch (error) {
            console.log(error);
            setAuthenticated(false)
            setAuth({})
        }
    };

    useEffect(() => {
        checkAuthenticated()
    }, []);

    if (Authenticated === null) {
        // Render a loading indicator while the authentication check is in  progress 
        return <div>Loading...</div>;
    }
    return (
        Authenticated
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default Protected