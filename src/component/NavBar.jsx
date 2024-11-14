import { Link, NavLink } from "react-router-dom";
import { MdForwardToInbox } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "./Authprovide";

const NavBar = () => {

  const {user, setSignout} = useContext(AuthContext);

  //* signout control
  const handleSignout = () => {
    setSignout()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    })

  }
    return (
        <>
            <div className="navbar bg-base-100">

  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/"> <li><a>Home</a></li> </NavLink>
        <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/login"> <li><a>Login</a></li> </NavLink>
        <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/signin"> <li><a>Register</a></li> </NavLink>

        {
          user && <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/order"> <li><a>Order</a></li> </NavLink>
        }
        
      </ul>

    </div>
    <a className="btn btn-ghost text-xl">integration</a>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
      <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/"> <li><a>Home</a></li> </NavLink>
      <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/login"> <li><a>Login</a></li> </NavLink>
      <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/signin"> <li><a>Register</a></li> </NavLink>

      {
          user && 
          <>
          
          <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/order"> <li><a>Order</a></li> </NavLink>

          <NavLink className={({isActive}) => isActive?"btn btn-warning":"btn btn-outline btn-warning"} to="/profile"> <li><a>profile</a></li> </NavLink>
          </>
        }
    </ul>
  </div>

{/* show user name */}
  <div className="navbar-end">
    {
      user 
           ? 

      <><p className="btn">{user?.email}
    </p>
    <button onClick={handleSignout} className="btn"> Signout </button></>
           :

 <Link to="/login" className="btn rounded-full shadow-md border border-gray-100 border-2">{user?.email}
    </Link>
    }

  </div>

  <div className="navbar-end">
    <a className="btn rounded-full shadow-md border border-gray-100 border-2"><MdForwardToInbox />
    </a>
  </div>
</div>
        </> 
    );
};

export default NavBar;