import React from 'react';
import BrowseBtn from './BrowseBtn';

const Banner1 = () => {
    return (
         <div
            className="w-full h-[500px] sm:h-[550px] lg:h-[600px] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `
                linear-gradient(to right, #0F172AFF 0%, #0F172ACC 50%, #0F172A00 120%),
                url('https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                `
            }}
        >
            <div className='flex flex-col justify-center items-center space-y-5 md:space-y-6 lg:space-y-7 text-center'>
                <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl text-white'>Discover Your Next Great Read</h1>
                <p className='text-xl md:text-2xl text-white'>Browse thousands of books from libraries near you and get them delivered to your <br className='hidden md:block' /> doorstep</p>
                <BrowseBtn></BrowseBtn>
            </div>
            
        </div> 
    );
};

export default Banner1;