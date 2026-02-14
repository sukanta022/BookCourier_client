import React from 'react'
import useAccountUser from '../../../hooks/useAccountUser'
import { IoCartOutline, IoBookOutline } from "react-icons/io5"
import { HiOutlineArrowTrendingUp } from "react-icons/hi2"
import { Link } from 'react-router'

const HomePage = () => {
    const { userData, isLoading } = useAccountUser()

    if (isLoading || !userData) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg font-semibold animate-pulse">Loading dashboard...</p>
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 md:p-10">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back, {userData.name} 👋</h1>
                <p className="text-gray-500 mt-1">{userData.role} Dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
                    <div className="flex items-center justify-between text-gray-500">
                        <p className="font-medium">Total Orders</p>
                        <IoCartOutline className="text-3xl text-indigo-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-3">0</p>
                </div>

                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
                    <div className="flex items-center justify-between text-gray-500">
                        <p className="font-medium">Active Orders</p>
                        <HiOutlineArrowTrendingUp className="text-3xl text-emerald-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-3">0</p>
                </div>

                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
                    <div className="flex items-center justify-between text-gray-500">
                        <p className="font-medium">Total Spent</p>
                        <IoBookOutline className="text-3xl text-rose-500" />
                    </div>
                    <p className="text-3xl font-bold text-gray-800 mt-3">$0.00</p>
                </div>

            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <Link to="/books" className="bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center justify-center p-10 group">
                    <IoBookOutline className="text-5xl text-indigo-500 group-hover:scale-110 transition" />
                    <p className="mt-4 text-lg font-semibold text-gray-700">Browse Books</p>
                </Link>

                <Link to="/orders" className="bg-white rounded-xl shadow hover:shadow-xl transition flex flex-col items-center justify-center p-10 group">
                    <IoCartOutline className="text-5xl text-emerald-500 group-hover:scale-110 transition" />
                    <p className="mt-4 text-lg font-semibold text-gray-700">My Orders</p>
                </Link>

            </div>

        </div>
    )
}

export default HomePage
