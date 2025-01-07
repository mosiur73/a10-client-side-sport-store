import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import { AuthContext } from '../Provider/AuthProvider';
import { FaUserTie } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';
import { MdOutlineSportsSoccer } from 'react-icons/md';


const Navbar = () => {
  const {user,signOutUser,theme,toggleTheme }=useContext(AuthContext)


  const handleSignOut=()=>{
    signOutUser()
    .then(()=>{
      console.log('sign out successfully ');
      
    })
    .catch(()=>{
      // console.log(error.message)
    })
  }
    return (
        <div className="navbar fixed top-0 z-10 left-0 right-0 bg-base-200 shadow-2xl dark:bg-slate-800   ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li><NavLink to="/">Home</NavLink></li>
         {user && (
            <>
              <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
              <li><NavLink to="/allequipment">All Equipment</NavLink></li>
              <li><NavLink to="/myequipment">My Equipment</NavLink></li>
            </>
          )}
      </ul>
    </div>
    <MdOutlineSportsSoccer className='text-4xl' />
    <a className="btn btn-ghost text-2xl font-bold">Sports
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mx-3">
      <li><NavLink to="/">Home</NavLink></li>
      {user && (
            <>
              <li><NavLink to="/addequipment">Add Equipment</NavLink></li>
              <li><NavLink to="/allequipment">All Equipment</NavLink></li>
              <li><NavLink to="/myequipment">My Equipment</NavLink></li>
            </>
          )}
     
     
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