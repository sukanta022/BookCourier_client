import React from 'react';
import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';
const useAccountUser = () => {
    const {user,loading} = useAuth()

    const axiosInstace = useAxios()
    const {data: userData, isLoading, error, refetch} = useQuery({
        queryKey: [user?.email],
        enabled: !!user?.email && !loading,
        queryFn: async () => {
            const res = await axiosInstace.get(`/users/${user.email}`)
            return res.data
        }
    })

    return { userData, isLoading, error, refetch };

};

export default useAccountUser;