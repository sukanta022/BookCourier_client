import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';


const useAuth = () => {
    const userAuth = use(AuthContext)
    return userAuth;
};

export default useAuth;