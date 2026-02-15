import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAccountUser from "../../hooks/useAccountUser";
import Swal from "sweetalert2";

const BookDetails = () => {
    const { state: book } = useLocation();
    const axiosSecure = useAxiosSecure()
    const {userData} = useAccountUser()
    const handleCartSubmit = () =>{
        const cartData = {
            bookID : book._id,
            bookTitle : book.title,
            userEmail :  userData.email,
            status : "unpaid",
        }
         axiosSecure.post(`/carts?email=${userData?.email}`, cartData)
            .then(res => {
                if (res.data?.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Added to Cart!",
                        text: `${book.title} has been added to your cart`,
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: "Could not add book to cart. Try again!",
                });
            });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF] flex items-center justify-center px-6 py-16">
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                
                <div className="relative group overflow-hidden">
                    <img src={book.photo} alt={book.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"/>
                    <span className="absolute top-5 left-5 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm capitalize shadow">
                        {book.status}
                    </span>
                </div>

                
                <div className="p-10 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{book.title}</h1>
                        <p className="text-indigo-600 text-lg font-medium mb-4">by {book.author}</p>

                        <p className="text-gray-600 leading-relaxed mb-6">{book.description}</p>

                       
                        <div className="flex items-center gap-6 text-sm mb-8">
                            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">📦 {book.totalBooks} in stock</span>

                            <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">💲 {book.price}</span>
                        </div>
                    </div>

                    
                    <div className="flex gap-4">
                        <button onClick={handleCartSubmit} className="btn flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl hover:bg-indigo-600 transition font-semibold shadow-lg"><FaShoppingCart /> Add to Cart </button>

                        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-pink-500 hover:text-white transition font-semibold shadow"> <FaHeart /> Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
