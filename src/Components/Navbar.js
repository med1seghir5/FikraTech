import React from 'react';
import logo from './images/SmallLogo.svg';

const Navbar = () => {
  return (
    <div className='flex flex-row space-x-20 pt-5 pb-12 sm:flex-row sm:items-center sm:justify-between' id='navbar'>
      <div className='mb-4 ml-3 sm:mb-0'>
        <img src={logo} alt='Petit logo' className='w-full sm:w-auto' />
      </div>

      <div className='sm:mb-0 pr-5'>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfErfYRo7Xg4FU1fyZ9M0r0YU1AWGAwiNA9pzKi6J87_BHDkQ/viewform'>
        <button className='bg-[#008080] text-[#ffff] w-28 sm:w-32 h-10 font-mermaid'>
          Register
        </button>
      </a>
      </div>
    </div>
  );
};

export default Navbar;