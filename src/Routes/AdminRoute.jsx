import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <p>Loading...</p>
    }

    if (role !== 'admin') {
        return;
    }

    return children;
};

export default AdminRoute;