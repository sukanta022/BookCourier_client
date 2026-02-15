import axios from "axios";
import React, { use } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../../Context/AuthContext";
const BookUpdate = () => {
    const { state: book } = useLocation();
    const axiosSecure = useAxiosSecure()
    const {user} = use(AuthContext)
    
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        try {
            console.log("djhf")
            const profileImg = data.photo[0];

            if (profileImg) {
                const formData = new FormData();
                formData.append("image", profileImg);

                const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                const imgRes = await axios.post(img_API_URL, formData);
                const photoURL = imgRes.data.data.url;

                data.photo = photoURL;
            }
            else{
                data.photo = book.photo
            }
            
            const res = await axiosSecure.patch(`/books/${book?._id}?email=${user?.email}`, data);


            if (res.data?.insertedId || res.data?.acknowledged) {
                Swal.fire({
                    icon: "success",
                    title: "Book Updated!",
                    text: "Your book has been updated successfully.",
                    timer: 2000,
                    showConfirmButton: false
                });

                navigate('/Dashboard/update-book')
            }

        } catch (error) {
            console.log("Register Error:", error.message);

            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to add book. Please try again."
            });
        }
    };





    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col justify-start p-6">
            <div className="mb-12 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Book Name: <span className="text-gray-600">{book?.title}</span></h1>
                <p className="text-gray-500 text-lg">Update book details here</p>
            </div>
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-black text-sm">Book Title</label>
                            <input defaultValue={book?.title} {...register("title", { required: "Title is required" })} className="input w-full bg-[#F3F4F6]  text-black" placeholder="Enter book title"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-black text-sm">Author</label>
                            <input defaultValue={book?.author} {...register("author", { required: "Author is required" })} className="input w-full bg-[#F3F4F6]  text-black" placeholder="Enter author name" />
                            {errors.author && (
                                <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>
                            )}
                        </div>
                    </div>


                    <div>
                        <label className="text-black text-sm">Description</label>
                        <textarea defaultValue={book?.description}
                            {...register("description", { required: "Description is required" })}
                            className="textarea w-full bg-[#F3F4F6]  text-black"
                            placeholder="Enter book description"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">
                                {errors.description.message}
                            </p>
                        )}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label className="text-black text-sm">Rental Price ($)</label>
                            <input defaultValue={book?.price}
                                type="number"
                                {...register("price", {
                                    required: "Price required",
                                    min: { value: 1, message: "Minimum $1" },
                                })}
                                className="input w-full bg-[#F3F4F6]  text-black"
                                placeholder="0.00"
                            />
                            {errors.price && (
                                <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-black text-sm">Status</label>
                            <select defaultValue={book?.status} {...register("status", { required: "Status required" })} className="select w-full bg-[#F3F4F6]  text-black">
                                <option value="">Select status</option>
                                <option value="published">Published</option>
                                <option value="unpublished">Unpublished</option>
                            </select>
                            {errors.status && (
                                <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-black text-sm">Total Books</label>
                            <input defaultValue={book?.quantity} type="number" {...register("quantity", { required: "Quantity required", min: { value: 1, message: "Minimum 1" }, })}
                                className="input w-full bg-[#F3F4F6]  text-black"
                                placeholder="Total count"
                            />
                            {errors.quantity && (
                                <p className="text-red-500 text-xs mt-1">
                                    {errors.quantity.message}
                                </p>
                            )}
                        </div>
                    </div>


                    <div>
                        <label className="text-black text-sm">Book Cover</label>
                        <label className="flex items-center gap-3 p-3 mt-1 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                            <MdOutlineFileUpload className="text-2xl text-indigo-400" />
                            <span className="text-gray-400">Click to upload book cover</span>
                            <input type="file" accept="image/*" {...register("photo")} className="hidden" />
                        </label>
                        
                    </div>


                    <div className="flex justify-end">

                        <button type="submit" className="btn px-5 py-2 rounded-lg bg-black hover:bg-gray-700 text-white transition">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookUpdate;
