import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const axiosInstace = useAxios()
    const {signInUser,signInGoogle} = useAuth()
    const navigate = useNavigate()

    const handleLogin = (data) => {
        signInUser(data.email,data.password)
        .then(() =>{
            toast.success("Login Successfully")
            navigate(`${location.state ? location.state : "/"}`)
        } )
        .catch(error =>{
            Swal.fire({
                icon: "error",
                title: error.message,
                text: "Something went wrong!",
            });
        } )
    };

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then((res) => {
            
            const data = {
                name : res.user.displayName,
                email : res.user.email,
                photo : res.user.photoURL

            }
            axiosInstace.post('/users', data)
            
            toast.success("Login Successfully")
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: error.message,
                text: "Something went wrong!",
            });
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="bg-blue-600 p-4 rounded-full inline-block">
                        <IoBookOutline className="text-white text-3xl" />
                    </div>
                    <h1 className="font-bold text-3xl mt-3">Welcome Back</h1>
                    <p className="text-gray-500">Login to your BookCourier account</p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                    
                    {/* Email */}
                    <div>
                        <label className="label text-black font-bold">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label text-black font-bold">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} {...register("password", { required: "Password is required", })} className="input input-bordered w-full" placeholder="Enter password" />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-3 text-xl text-gray-500">
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1"> Password is required</p>
                        )}
                    </div>

                    

                    
                    <button type="submit" className="btn btn-primary w-full mt-2">Login</button>

                    <button onClick={handleGoogleSignIn} className='btn font-semibold w-full text-white bg-[#001931]'><FcGoogle /> Sign in with Google</button>
                     <p className="text-center">New to our website? Please <Link to={'/register'} className='text-blue-500 underline'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
