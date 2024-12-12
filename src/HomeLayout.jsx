// HomeLayout.js
import { Outlet, Link } from 'react-router-dom';

function HomeLayout() {
  return (
    <div>
      <h1>Home Layout</h1>
      <nav>
        <ul>
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
