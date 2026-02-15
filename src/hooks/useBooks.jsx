import React from 'react';

import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';
const useBooks = () => {

    const axiosInstace = useAxios()
    const {data: booksData, isLoading, refetch} = useQuery({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await axiosInstace.get('/books')
            return res.data
        }
    })

    return { booksData, isLoading, refetch };

};

export default useBooks;