import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const axiosInstace = useAxios()
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()

    const handleRegister = async (data) => {
        try {
            const profileImg = data.photo[0];

            const result = await createUser(data.email, data.password);
            console.log(result);

            const formData = new FormData();
            formData.append("image", profileImg);

            const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

            const imgRes = await axios.post(img_API_URL, formData);
            const photoURL = imgRes.data.data.url;

            const profile = {
                displayName: data.name,
                photoURL
            };

            const profile2 = {
                name: data.name,
                email: data.email,
                photo: photoURL
            };

            await updateUserProfile(result.user, profile);   
            await axiosInstace.post('/users', profile2); 

            console.log("Account Registered Successfully");

            reset();
            navigate("/");   

        } catch (error) {
            console.log("Register Error:", error.message);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                
                <div className="text-center mb-6">
                    <div className="bg-blue-600 p-4 rounded-full inline-block">
                        <IoBookOutline className="text-white text-3xl" />
                    </div>
                    <h1 className="font-bold text-3xl mt-3">Create Account</h1>
                    <p className="text-gray-500">Join BookCourier today</p>
                </div>

                <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                    
                    <div>
                        <label className="label">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    
                    <div>
                        <label className="label">Email</label>
                        <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered w-full"placeholder="Enter your email"/>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    
                    <div>
                        <label className="label">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} {...register("password", {
                                required: "Password is required", pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{7,}$/, message: "Min 7 chars, 1 uppercase, 1 lowercase & 1 special char", }
                            })} className="input input-bordered w-full"
                                placeholder="Enter password" />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 text-xl text-gray-500">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>


                    <div>
                        <label className="label">Profile Image (optional)</label>
                        <input type="file" {...register("photo")} className="file-input file-input-bordered w-full" />
                    </div>


                    <button type="submit" className="btn btn-primary w-full mt-2">Register</button>


                    <p className="text-center text-sm mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
