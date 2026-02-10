import React from 'react';
import BrowseBtn from './BrowseBtn';

const Banner3 = () => {
    return (
         <div
            className="w-full h-[500px] sm:h-[550px] lg:h-[600px] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `
                    linear-gradient(to right, #0F172AFF 0%, #0F172ACC 50%, #0F172A00 120%),
                    url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                `
            }}
        >
            <div className='flex flex-col justify-center items-center space-y-5 md:space-y-6 lg:space-y-7 text-center'>
                <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl text-white'>Fast & Reliable Delivery </h1>
                <p className='text-xl md:text-2xl text-white'>Get your favorite books delivered quickly with our efficient library-to-home delivery <br className='hidden md:block' /> service</p>
                <BrowseBtn></BrowseBtn>
            </div>
            
        </div> 
    );
};

export default Banner3;