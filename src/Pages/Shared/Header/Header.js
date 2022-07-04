import React from 'react';
import { Link } from 'react-router-dom';
import logo from './airplane.png'

const Header = () => {
    return (
        <header className='text-gray-600 body-font'>
           <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <Link to="/home" className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
                <img className='animate-bounce' src={logo} alt="" />
                <span className='ml-3 text-2xl font-bold'>JustGo</span>
            </Link>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <Link to="/home" className='mr-5 text-lg font-semibold text-gray-700 hover:text-gray-900'>Home</Link> 
                <Link to="/services" className='mr-5 text-lg font-semibold text-gray-700 hover:text-gray-900'>Services</Link>
                 <Link to="/story" className='mr-5 text-lg font-semibold text-gray-700 hover:text-gray-900'>Story</Link>
            </nav>
            <div className='flex items-center'>
                <img className='w-10 h-10 rounded-full mr-2' src="" alt="" />
                <Link to="/" className='mr-5 text-lg font-semibold text-gray-700 hover:text-gray-900'></Link>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-semibold mt-4 md:mt-0">Logout</button>
            </div>
            <Link to="/login" className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-lg font-semibold mt-4 md:mt-0'>Login</Link>
           </div>
          
        </header>
    );
};

export default Header;