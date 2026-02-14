import React from 'react';
import useAccountUser from '../../../hooks/useAccountUser';
import { MdOutlineFileUpload } from "react-icons/md";

const MyProfile = () => {
    const { userData, isLoading } = useAccountUser();

    if (isLoading || !userData) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg font-semibold animate-pulse">Loading profile...</p>
        </div>
    );

    const { name, email, photo, role } = userData;

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-10">

            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">My Profile</h1>
                <p className="text-gray-500 text-lg">Manage your profile information and account settings</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10">

                <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8 ">
                    <h2 className="text-2xl font-semibold mb-4">Profile Overview</h2>
                    <div className='flex flex-col items-center justify-center text-center lg:mt-12'>
                        <img src={photo} alt="Profile" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-indigo-200" />
                        <p className="text-xl font-bold text-gray-800">{name}</p>
                        <p className="text-gray-500 mb-4">{email}</p>
                        <div className="px-4 py-1 rounded-2xl bg-indigo-100 text-indigo-800 font-medium">{role}</div>
                    </div>
                </div>

                <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>

                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-medium">Name</label>
                            <input type="text" defaultValue={name} className="input input-bordered w-full rounded-lg p-3 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition" placeholder="Enter your name" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-medium">Email</label>
                            <input type="email" defaultValue={email} disabled className="input input-bordered w-full rounded-lg p-3 bg-gray-100 cursor-not-allowed" placeholder="Email cannot be changed" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-medium">Profile Photo</label>
                            <label className="flex items-center gap-3 p-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                                <MdOutlineFileUpload className="text-2xl text-indigo-500" />
                                <span className="text-gray-500">Upload new photo</span>
                                <input type="file" className="hidden" />
                            </label>
                        </div>

                        <button className="btn mt-4 bg-black hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105">Save Changes</button>
                    </form>

                </div>
            </div>
        </div>
    )
};

export default MyProfile;
