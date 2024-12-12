// HomeLayout.js
import { Outlet, Link } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <nav className='h-20 px-2 flex justify-between bg-pink-950'>
        <Link to="/"><div className='h-10 w-10 m-4 bg-white rounded-full'></div></Link>
        <ul className='h-full text-white text-lg flex justify-end gap-7 items-center'>
          <li><Link to="home">Home</Link></li>
          <li><Link to="users">Users</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </nav>
      <div>
       
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
