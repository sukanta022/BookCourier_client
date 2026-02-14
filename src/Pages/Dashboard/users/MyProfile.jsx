import React from 'react';
import useAccountUser from '../../../hooks/useAccountUser';
import { MdOutlineFileUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxios from '../../../hooks/useAxios';

const MyProfile = () => {
    const { userData, isLoading, refetch } = useAccountUser();
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxios()
    if (isLoading || !userData) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-lg font-semibold animate-pulse">Loading profile...</p>
        </div>
    );


    const { name, email, photo, role } = userData;



    const handleProfileUpdate = (data) => {
        console.log("Submitting profile update...");
        const profileImg = data.photo[0];

        const formData = new FormData();
        formData.append("image", profileImg);

        const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

        axios.post(img_API_URL, formData)
            .then(imgRes => {
                const photoURL = imgRes.data.data.url;

                const updateProfile = { name: data.name, photo: photoURL };

                axiosSecure.patch(`/users/${email}`, updateProfile)
                    .then(res => {
                        console.log("Server response:", res.data);
                        refetch(); // refetch updated user

                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success!",
                                text: "Profile updated successfully.",
                                icon: "success",
                                confirmButtonColor: "#4f46e5",
                            });
                        }

                    })
                    .catch(err => {
                        console.log("Patch failed", err);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to update profile.",
                            icon: "error",
                            confirmButtonColor: "#d33",
                        });
                    })
            })
            .catch(err => {
                console.log("Image upload failed", err);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to upload image.",
                    icon: "error",
                    confirmButtonColor: "#d33",
                });
            });
    };




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

                    <form onSubmit={handleSubmit(handleProfileUpdate)} className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2 text-gray-600 font-medium">Name</label>
                            <input type="text" defaultValue={name} {...register("name")} className="input input-bordered w-full rounded-lg p-3 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition" placeholder="Enter your name" />
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
                                <input type="file" accept="image/*"  {...register("photo")} className="hidden file-input " />
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
