import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={{}}>
        <h2>DBT</h2>
        <nav>
            <Link to="/dashboard">Dashboard </Link>
             <Link to="/my-bookings">My Bookings</Link>
        <Link to="/receipts">Receipts</Link>
        <Link to="/about">About</Link>
        {user?.email === "durgesh@tripifive.com" && (
            <Link to= "/admin" />
        )}
        </nav>
    </div>
  )
}

export default Sidebar