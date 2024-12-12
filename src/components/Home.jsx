import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {
    return(
      <div>
       <p>
        <Link to="about">About</Link>
       </p>
       <div>
         <Outlet />
       </div>
      </div>
    )
  }
  
  export default Home;