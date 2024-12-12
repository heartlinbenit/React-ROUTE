
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2 className='text-5xl p-10 text-pink-900 font-bold text-center'>ABOUT</h2>
      <nav>
        <ul className='flex justify-center m-4 gap-20'>
          <li><Link to="add">
            <button class="text-white bg-gradient-to-r from-pink-900 via-pink-900 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-900 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">ADD</button>
          </Link></li>
          <li><Link to="search">
            <button class="text-white bg-gradient-to-r from-pink-900 via-pink-900 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-900 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SEARCH</button>
          </Link></li>
        </ul>
      </nav>
      
     
      <Outlet />
    </div>
  );
}

export default About;
