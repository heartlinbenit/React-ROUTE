import React from 'react'
import { useParams, Outlet, Link } from 'react-router-dom';
import UserA from './UserA';
import UserB from './UserB';
import User from './User';

function Users() {
  const { id } = useParams();
  if(id == 123)
      return <UserA id={id} />;
  else if(id == 9)
    return <User id={id}/>;
  else if(id == 456)
     return <UserB id={id} />;
  
  
    return(
     <div>
       <div>
       <div className="font-bold text-pink-900 text-5xl p-10 text-center ">
          USERS
      </div>
      <Link to="/users/123">
          <button class="text-white bg-gradient-to-r from-pink-900 via-pink-900 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-900 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">123</button>
      </Link>

      <Link to="/users/456">
          <button class="text-white bg-gradient-to-r from-pink-900 via-pink-900 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-900 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">456</button>
      </Link>
      
      <Link to="/users/9">
          <button class="text-white bg-gradient-to-r from-pink-900 via-pink-900 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-900 dark:focus:ring-pink-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">9</button>
      </Link>
     
       </div>
       <Outlet />
     </div>
    )
  }
  
  export default Users;