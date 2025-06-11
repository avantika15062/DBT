
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
   <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
       
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/my-bookings">My Bookings</Link>
          <Link to="/receipts">Receipts</Link>
          <Link to="/about">About</Link>
          {user?.email === "durgesh@tripifive.com" && (
            <Link to="/admin">Admin Panel</Link>
          )}
        </nav>
      </div>
    </>
  )
}

export default Sidebar