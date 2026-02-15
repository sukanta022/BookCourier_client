import React from 'react';
import useRole from '../hooks/useRole';
import useAuth from '../hooks/useAuth';

const LibrarianRoute = ({ children }) => {
    const { loading } = useAuth()
    const { role, roleLoading } = useRole()

    if (loading || roleLoading) {
        return <p>Loading...</p>
    }

    if (role !== 'librarian') {
        return;
    }

    return children;
};

export default LibrarianRoute;



