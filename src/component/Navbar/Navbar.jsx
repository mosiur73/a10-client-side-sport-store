import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserTie } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';


const Navbar = () => {
  const {user,signOutUser,theme,toggleTheme}=useContext(AuthContext)


  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log('sign out successfully ');
      
    })
    .catch(()=>console.log(error.message))
  }
    return (
        <div className="navbar bg-base-100 dark:bg-slate-800">
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
         <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
      <li><NavLink to="/allequipment">All Equipment</NavLink></li>
      <li><NavLink to="/myequipment">My Equipment</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">Lotus
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mx-3">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
      <li><NavLink to="/allequipment">All Equipment</NavLink></li>
      <li><NavLink to="/myequipment">My Equipment</NavLink></li>
     
    </ul>
  </div>
  <div className="navbar-end">
 <div className='navbar'>
 <button onClick={toggleTheme} className="theme-toggle-btn mr-4">
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
 </div>
  {
                user?
               <div className='flex gap-3 items-center'>
                
                 <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.email}  className='text-3xl'><FaUserTie /></div>
                 <Tooltip id="my-tooltip" />
                
               
                 <button onClick={handleSignOut} className='btn btn-accent rounded-xl'>Logout</button>
               </div>
                :
              <Link to="/login" className='btn bg-orange-500 rounded-xl'>Login</Link>
              }
  </div>
</div>
    );
};

export default Navbar;