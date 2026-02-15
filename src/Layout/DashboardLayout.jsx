import React from 'react';
import { Link, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
import { MdOutlineDashboard } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5"
const DashboardLayout = () => {
    const { user } = useAuth();

    return (
        <div className="drawer lg:drawer-open min-h-screen bg-base-100">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="navbar bg-base-300 px-4 shadow-sm">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 font-semibold text-lg">Dashboard</div>
                </nav>

                {/* Page Content */}
                <main className="flex-1 p-4 md:p-6 bg-gray-50">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <aside className="w-64 bg-base-200 min-h-full flex flex-col shadow-lg">

                    {/* Profile Header */}
                    <div className="border-b border-gray-300 p-4">
                        <div className="flex items-center gap-3">
                            <p className="text-2xl text-[#155DFC]"><MdOutlineDashboard /></p>
                            <div className="leading-tight">
                                <p className="text-sm text-gray-500">Welcome back</p>
                                <p className="font-semibold truncate max-w-[160px]">{user?.displayName}</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <ul className="menu p-3 gap-1 flex-1">
                        <li>
                            <Link to={'/Dashboard'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-5"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2z"></path></svg>
                                <span>Homepage</span>
                            </Link>
                        </li>

                        <li>
                            <Link className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="size-5"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span>Settings</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Dashboard/MyOrders'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                <p><IoCartOutline/></p>
                                <p>My Orders</p>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Dashboard/Profile'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                <p><IoCartOutline/></p>
                                <p>My Profile</p>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Dashboard/Users'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                
                                <p>Users</p>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to={'/Dashboard/Add_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                
                                <p>Add books</p>
                            </Link>
                        </li>

                        <li>
                            <Link to={'/Dashboard/All_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                
                                <p>All books</p>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
