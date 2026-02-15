import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { IoBookOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from '../../Context/AuthContext';
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext)

  if (loading) {
    return <p>Loading....</p>
  }

  const NavList = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/browse_books"}>Browse books</NavLink></li>
    {
      user && <>
        <li><NavLink to={"/Dashboard"}>Dashboard</NavLink></li>

      </>
    }
  </>

  const handleSignOut = () => {
    signOutUser()
  }
  return (
    <div class="navbar backdrop-blur-md bg-white/20 border border-white/30 shadow-md sticky top-0 z-50">
      <div class="navbar-start gap-0">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn  lg:hidden">
            <GiHamburgerMenu />
          </div>
          <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {NavList}
          </ul>
        </div>
        <Link to={"/"} class="btn btn-ghost text-xl gap-2 animate__animated  animate__heartBeat font-bold">
          <div className=' text-[#155DFC] rounded-lg text-3xl font-extrabold'>
            <IoBookOutline />
          </div>
          BookCourier
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-5">
          {NavList}
        </ul>
      </div>
      <div class="navbar-end gap-3">
        {
          user ? <p className='font-bold text-xl flex items-center border-2 border-[#0D9488] gap-1 rounded-lg p-1'><FaRegCircleUser />
            {user.displayName}</p> : <Link to={'/login'} class="btn rounded-4xl">Log in</Link>
        }

        {
          user ? <button onClick={handleSignOut} className='btn bg-[#0D9488]/90 md:rounded-4xl rounded-full text-white'><span className='md:block hidden'>Log out</span> <MdLogout className='md:hidden block text-xl font-bold' /></button> : <Link to={'/register'} className="btn bg-[#030213] rounded-4xl text-white">Sign Up</Link>
        }


      </div>
    </div>
  );
};

export default Navbar;