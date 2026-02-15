import React from "react";
import { FaSearch } from "react-icons/fa";
import useBooks from "../../hooks/useBooks";
import BookCard from "./BookCard";

const BrowseBooks = () => {
  const { booksData, isLoading } = useBooks();
  
  if (isLoading) return <p className="text-center mt-20">Loading books...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-[#EEF2FF] px-6 py-14">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800">
          📚 Browse All Books
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          Browse our complete collection of books from libraries across the country
        </p>

        {/* Search */}
        <div className="mt-8 relative max-w-xl mx-auto">
          <FaSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search by title or author"  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition shadow-sm" />
        </div>
      </div>

      {/* Book Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {booksData.length > 0 ? (
          booksData.map((book) => (
            <BookCard key={book._id} book={book} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No books found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
