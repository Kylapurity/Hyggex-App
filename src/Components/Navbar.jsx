import React from 'react';
import hyggex from '../assets/image.png';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-20 py-10'>
      <img className='w-40 h-auto ml-20' src={hyggex} alt="Hyggex logo" />

      <ul className='flex items-center gap-x-10 mr-20'>
        <li className='text-gray-800 hover:text-blue-500 cursor-pointer text-xl font-medium'>Home</li>
        <li className='text-gray-800 hover:text-blue-500 cursor-pointer text-xl font-medium'>Flashcard</li>
        <li className='text-gray-800 hover:text-blue-500 cursor-pointer text-xl font-medium'>Contact</li>
        <li className='text-gray-800 hover:text-blue-500 cursor-pointer text-xl font-medium'>FAQ</li>
        <button className='w-32 h-12 px-3 py-2 bg-gradient-to-b from-blue-800 to-blue-500 text-white rounded-full  hover:bg-gradient-to-b focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
          Login
        </button>
      </ul>
    </div>
  );
};

export default Navbar;



