
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <ul>
          <li><Link to="add">Add</Link></li>
          <li><Link to="search">Search</Link></li>
        </ul>
      </nav>
      
     
      <Outlet />
    </div>
  );
}

export default About;
