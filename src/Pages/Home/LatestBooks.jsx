import React from 'react';
import { Link } from 'react-router';
import useBooks from '../../hooks/useBooks';
import BookCard from '../Browse/BookCard';


const LatestBooks = () => {
    const { booksData = [], isLoading } = useBooks();
    const latestBooks = booksData.slice(0, 3);

    if (isLoading) return <p className="text-center py-10">Loading latest books...</p>;

    return (
        <div className="bg-white py-16 px-4 md:px-10">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">Latest Books</h2>
                <p className="text-gray-500 text-lg">Discover newly added books from our library</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 max-w-7xl mx-auto">
                {latestBooks.map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <Link to={"/browse_books"}className="btn bg-black text-white px-8 py-3 rounded-xl hover:bg-indigo-600 transition font-semibold shadow-lg">View All Books</Link>
            </div>
        </div>
    );
};

export default LatestBooks;
