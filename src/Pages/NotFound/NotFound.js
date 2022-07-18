import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="bg-white relative overflow-hidden h-screen relative">
    <div class="absolute top-0 left-0 right-0 z-20">
        <nav class="container mx-auto px-6 md:px-12 py-4">
            <div class="md:flex justify-between items-center">
                <div class="flex justify-between items-center">
                    <div class="md:hidden">
                        <button class="text-gray-800 focus:outline-none">
                            <svg class="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div class="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div class="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
            <div class="w-full mb-16 md:mb-8 text-center lg:text-left">
                <h1 class="font-light font-sans text-center lg:text-left text-5xl lg:text-7xl mt-12 md:mt-0 text-gray-700">
                    Sorry, this page isn&#x27;t available
                </h1>
                <Link to="/">
                <button class="px-2 py-2 w-36 mt-16 text-white transition ease-in duration-200 hover:bg-gray-800 border-2 text-lg border-gray-700 bg-gray-700 focus:outline-none">
                    Go back home
                </button>
                </Link>
            </div>
            <div class="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                <img src="https://media1.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=ecf05e47bmhkgq5bmeew2prr2bftje3m4tjlhimqkbsysa3a&rid=giphy.gif&ct=g" alt="" />
            </div>
        </div>
    </div>
</div>
    );
};

export default NotFound;