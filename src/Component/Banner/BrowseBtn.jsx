import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';
const BrowseBtn = () => {
    return (
        <Link className='btn bg-[#030213] border-0 text-white text-2xl py-6 px-6 font-bold rounded-4xl'>Browse All Books <FaArrowRight /></Link>
    );
};

export default BrowseBtn;