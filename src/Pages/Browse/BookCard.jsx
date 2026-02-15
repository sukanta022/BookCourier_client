import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";

const BookCard = ({ book }) => {
    const { title, author, description, price, photo, _id } = book;
    const navigate = useNavigate()
    return (
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl">

            <div className="overflow-hidden h-56">
                <img src={photo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>

            <div className="p-5 space-y-2">
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition"> {title}  </h2>

                <p className="text-sm text-gray-500">by {author}</p>

                <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition"> ${price}</p>

                    <button onClick={() => navigate(`/browse_book/${_id}`, { state: book })} className="btn flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium transition group-hover:bg-blue-600"><FaEye />  View Details</button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
