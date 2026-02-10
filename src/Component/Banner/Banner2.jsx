import React from 'react';
import BrowseBtn from './BrowseBtn';

const Banner2 = () => {
    return (
         <div
            className="w-full h-[500px] sm:h-[550px] lg:h-[600px] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `
                    linear-gradient(to right, #0F172AFF 0%, #0F172ACC 50%, #0F172A00 120%),
                    url('https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
                `
            }}
        >
            <div className='flex flex-col justify-center items-center space-y-5 md:space-y-6 lg:space-y-7 text-center'>
                <h1 className='font-extrabold text-5xl md:text-6xl lg:text-7xl text-white'>Read Anytime, Anywhere</h1>
                <p className='text-xl md:text-2xl text-white'>No need to visit the library. Order books online and enjoy reading from the comfort of <br className='hidden md:block' />your home</p>
                <BrowseBtn></BrowseBtn>
            </div>
            
        </div> 
    );
};

export default Banner2;