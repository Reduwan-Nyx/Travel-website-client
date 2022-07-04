import React from 'react';
import hero from './hero-5.png'
const Banner = () => {
    return (
        <section className='text-gray-600 body-font banner'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>It's a Big World Out <br className='hidden lg:inline-block' />There Go Explore</h1>
                    <p className='mb-8 leading-relaxed text-lg font-medium'>Travel makes you realize that no matter how much you know, there’s always more to learn... Travel makes you realize that no matter how much you know, there’s always more to learn...</p>
                    <div className='flex justify-center'>
                        <button className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus-outline-none hover:bg-green-600 rounded text-lg'>Get Started</button>
                        <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>Learn More</button>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img className='object-cover object-center rounded' src= {hero} alt="hero" />
                </div>
            </div>
        </section>
    );
};

export default Banner;