import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAccountUser from "../../../hooks/useAccountUser";
import Swal from "sweetalert2";
const BookForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure()
    const { userData, isLoading } = useAccountUser()
    if (isLoading) {
        return <p>loadig</p>
    }
    

    const onSubmit = async (data) => {
        try {
            const profileImg = data.photo[0];

            const formData = new FormData();
            formData.append("image", profileImg);

            const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

            const imgRes = await axios.post(img_API_URL, formData);
            const photoURL = imgRes.data.data.url;

            data.photo = photoURL;
            console.log(data)
            const res = await axiosSecure.post(`/books?email=${userData?.email}`, data);

            if (res.data?.insertedId || res.data?.acknowledged) {
                Swal.fire({
                    icon: "success",
                    title: "Book Added!",
                    text: "Your book has been added successfully.",
                    timer: 2000,
                    showConfirmButton: false
                });

                reset();
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
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Add New Book</h1>
                <p className="text-gray-500 text-lg">Add a new book to your library collection</p>
            </div>
            <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-black text-sm">Book Title</label>
                            <input {...register("title", { required: "Title is required" })} className="input w-full bg-[#F3F4F6]  text-black" placeholder="Enter book title"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="text-black text-sm">Author</label>
                            <input {...register("author", { required: "Author is required" })} className="input w-full bg-[#F3F4F6]  text-black" placeholder="Enter author name" />
                            {errors.author && (
                                <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>
                            )}
                        </div>
                    </div>


                    <div>
                        <label className="text-black text-sm">Description</label>
                        <textarea
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
                            <input
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
                            <select {...register("status", { required: "Status required" })} className="select w-full bg-[#F3F4F6]  text-black">
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
                            <input type="number" {...register("quantity", { required: "Quantity required", min: { value: 1, message: "Minimum 1" }, })}
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
                            <input type="file" accept="image/*" {...register("photo", { required: "Cover image required" })} className="hidden" />
                        </label>
                        {errors.photo && (
                            <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
                        )}
                    </div>


                    <div className="flex justify-end gap-3">
                        <button type="button" onClick={() => reset()} className="btn px-4 py-2 rounded-lg border border-gray-600 bg-gray-400 text-black hover:bg-gray-500 transition"> Reset</button>

                        <button type="submit" className="btn px-5 py-2 rounded-lg bg-black hover:bg-gray-700 text-white transition">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;
