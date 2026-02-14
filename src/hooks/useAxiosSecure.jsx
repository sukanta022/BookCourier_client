import axios from 'axios';
import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const instance = axios.create({
    baseURL : 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {user,signOutUser} = use(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {

        //request intercepator
        const requestIntercepator = instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${user.accessToken}`
            return config;
        })

        //response intercepator
        const responseInterceptor = instance.interceptors.response.use(res => {
            return res;
        }, err => {
            const status = err.status;
            if(status === 401 || status === 403){
                console.log("Log out user for bad request")
                signOutUser()
                .then(() => {
                    //nevigate to the login page
                    navigate('/login')
                })
            }
        })
        
        return () => {
            instance.interceptors.request.eject(requestIntercepator)
            instance.interceptors.request.eject(responseInterceptor)
        }
        
    }, [user, signOutUser, navigate])

    return instance;
};

export default useAxiosSecure;