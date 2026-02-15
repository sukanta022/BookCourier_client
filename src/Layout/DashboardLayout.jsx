import React from 'react';
import { Link, Outlet } from 'react-router';
import useAuth from '../hooks/useAuth';
import { IoCartOutline, IoPersonOutline, IoPeopleOutline, IoBookOutline } from "react-icons/io5";
import { TbDashboard } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { MdLibraryBooks, MdAddBox, MdShoppingCart, MdOutlineDashboard } from "react-icons/md";
import useRole from '../hooks/useRole';
import { FaArrowLeft } from "react-icons/fa6";

const DashboardLayout = () => {
    const { user } = useAuth();
    const { role, roleLoading } = useRole();

    if(roleLoading){
        return <p>Loading....</p>
    }
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

                    <div>
                        <Link to={'/'} className='btn text-white bg-black font-bold'><FaArrowLeft /> Back to home</Link>
                    </div>
                    
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

                    <ul className="menu p-3 gap-1 flex-1">

                        {
                            role == "user" && <>
                                {/* Homepage / Dashboard */}
                                <li>
                                    <Link to={'/Dashboard'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <TbDashboard className="text-xl" />
                                        <span>Homepage</span>
                                    </Link>
                                </li>
                                {/* My Orders */}
                                <li>
                                    <Link to={'/Dashboard/MyOrders'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <IoCartOutline className="text-xl" />
                                        <span>My Orders</span>
                                    </Link>
                                </li>

                                {/* Carts */}
                                <li>
                                    <Link to={'/Dashboard/carts'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdShoppingCart className="text-xl" />
                                        <span>Carts</span>
                                    </Link>
                                </li>
                            </>
                        }


                        {
                            role == "librarian" && <>
                                {/* Add Books */}
                                <li>
                                    <Link to={'/Dashboard/Add_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdAddBox className="text-xl" />
                                        <span>Add Books</span>
                                    </Link>
                                </li>

                                {/* All Books */}
                                <li>
                                    <Link to={'/Dashboard/All_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdLibraryBooks className="text-xl" />
                                        <span>All Books</span>
                                    </Link>
                                </li>

                                {/* Librarian Invoice */}
                                <li>
                                    <Link to={'/Dashboard/LibrarianInvoice'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdLibraryBooks className="text-xl" />
                                        <span>Librarian Invoice</span>
                                    </Link>
                                </li>

                                {/* All Books */}
                                <li>
                                    <Link to={'/Dashboard/All_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdLibraryBooks className="text-xl" />
                                        <span>All Books</span>
                                    </Link>
                                </li>

                            </>
                        }

                        {
                            role == "admin" && <>
                                {/* Users */}
                                <li>
                                    <Link to={'/Dashboard/Users'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <IoPeopleOutline className="text-xl" />
                                        <span>Users</span>
                                    </Link>
                                </li>

                                {/* All Books */}
                                <li>
                                    <Link to={'/Dashboard/All_books'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                        <MdLibraryBooks className="text-xl" />
                                        <span>All Books</span>
                                    </Link>
                                </li>


                            </>
                        }




                        {/* My Profile */}
                        <li>
                            <Link to={'/Dashboard/Profile'} className="flex gap-3 items-center rounded-lg hover:bg-primary hover:text-white transition">
                                <IoPersonOutline className="text-xl" />
                                <span>My Profile</span>
                            </Link>




                        </li>











                    </ul>

                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
