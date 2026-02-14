import React from 'react';
import { TbBrowserPlus } from "react-icons/tb";
import { Link } from 'react-router';

const MyOrders = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-10 ">

            
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Orders</h1>
                <p className="text-gray-500 text-lg">Track and manage your book orders</p>
            </div>

            
            <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg p-16 md:p-20 w-full  text-center">
                <TbBrowserPlus className="text-6xl text-primary mb-6 animate-bounce" />
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">No Orders Yet</h2>
                <p className="text-gray-500 mb-6">Start browsing books to place your first order</p>
                <Link to="/books" className="bg-primary hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105">
                    Browse Books
                </Link>
            </div>

        </div>
    )
}

export default MyOrders;
