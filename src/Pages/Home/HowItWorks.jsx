import React from 'react';

import { IoMdTime } from "react-icons/io";
import { LuShield } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
const HowItWorks = () => {
    return (
        <div className='bg-[#F8FAFC] py-15 lg:py-25 w-11/12 mx-auto'>
            <div className='text-center space-y-2 mb-5'>
                <h2 className='text-3xl lg:text-4xl font-bold text-[#001931]'>Why Choose BookCourier?</h2>
                <p className='text-[#64748B]'>Experience the easiest way to borrow books from your local libraries</p>
            </div>

            <div className='flex flex-col  md:flex-row  justify-center items-center ,mt-10 lg:mt-15 gap-10 lg:gap-15'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-3 shadow-lg text-3xl rounded-full w-fit bg-[#DBEAFE] text-[#155DFC]'><LuTruck /></div>
                    <p className='text-[#001931] font-semibold text-xl'>1. Home Delivery</p>
                    <p className='text-[#64748B] text-center'>Books delivered right to your door within 2-3 business days</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-3 shadow-lg text-3xl rounded-full w-fit bg-[#DBEAFE] text-[#155DFC]'><IoMdTime /></div>
                    <p className='text-[#001931] font-semibold text-xl'>2. Flexible Returns</p>
                    <p className='text-[#64748B] text-center'>Keep books for up to 30 days and schedule easy returns</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-3 shadow-lg text-3xl rounded-full w-fit bg-[#DBEAFE] text-[#155DFC]'><LuShield /></div>
                    <p className='text-[#001931] font-semibold text-xl'>3. Secure Service</p>
                    <p className='text-[#64748B] text-center'>Your orders and personal information are always protected</p>
                </div>

                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='p-3 shadow-lg text-3xl rounded-full w-fit bg-[#DBEAFE] text-[#155DFC]'><IoBookOutline /></div>
                    <p className='text-[#001931] font-semibold text-xl'>4. Vast Collection</p>
                    <p className='text-[#64748B] text-center'>Access to thousands of books from multiple libraries</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;