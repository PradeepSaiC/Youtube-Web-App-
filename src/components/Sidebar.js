import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  //Early return
  if(isSidebarOpen) return null;

  return (
    <div className='col-span-1 h-full px-5 py-3 shadow-sm shadow-black mt-14 fixed bg-white'>
      <ul>
        <Link to={"/"}>
        
        <li>Home</li>
        </Link>
        <li>Shorts</li>
        <li>Subscription</li>
        <h1 className='font-bold'>You</h1>
        <ul>
        <li>History</li>
        <li>Watch Later</li>
        <li>Downloads</li>
        </ul>

        <li>Music</li>
        <li>
          Movies
        </li>
      </ul>
    </div>
  )
}

export default Sidebar