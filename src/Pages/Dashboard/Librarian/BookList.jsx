import React from 'react'
import useBooks from '../../../hooks/useBooks'
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import Swal from "sweetalert2"
import BookForm from './BookForm'
import { useNavigate } from 'react-router'

const BookList = () => {
  const { booksData = [], isLoading, refetch } = useBooks()
  const navigate = useNavigate()

  if (isLoading) return <p className="text-center py-10 text-gray-400">Loading books...</p>

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this book?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Delete"
    }).then(result => {
      if (result.isConfirmed) {
        // call delete api here
        console.log("delete id:", id)
        Swal.fire("Deleted!", "Book has been removed.", "success")
        refetch()
      }
    })
  }

  return (
    <div className="bg-[#F9FAFB] min-h-screen p-3 md:p-5">
      <h1 className="text-3xl font-bold text-white mb-8">Book Management</h1>

      <div className="overflow-x-auto bg-white rounded-2xl border border-gray-800 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className=" text-black font-bold border-b border-gray-800">
            <tr>
              <th className="p-4">Cover</th>
              <th className="p-4">Title</th>
              <th className="p-4">Author</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {booksData.map(book => (
                
              <tr key={book._id} className="border-b border-gray-800  ">
                <td className="p-4">
                  <img src={book.photo} alt={book.title} className="w-14 h-20 object-cover rounded-md shadow" />
                </td>
                
                <td className="p-4  text-black font-semibold">{book.title}</td>
                <td className="p-4 text-black font-semibold">{book.author}</td>
                <td className="p-4 text-indigo-400 font-semibold">${book.price}</td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    book.status === "published" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                  }`}>{book.status}</span>
                </td>

                <td className="p-4 text-center space-x-3">
                  <button onClick={() => navigate("/Dashboard/update-book", { state: book })} className="btn text-indigo-400 hover:text-indigo-300 transition text-lg"><FaEdit /></button>
                  <button onClick={() => handleDelete(book._id)} className="btn text-red-400 hover:text-red-300 transition text-lg"><FaTrashAlt /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookList
