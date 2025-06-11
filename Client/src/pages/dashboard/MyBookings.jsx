import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
const MyBookings = () => {
const [bookings, setBookings] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/api/bookings/user' , { withCredentials: true })
    .then(res => setBookings(res.data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div style={{ padding: '120px 2rem 2rem', backgroundColor: '#f0ffff', minHeight: '100vh' }}> 
    <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem', color: '#333' }}> My bookings</h2>
   {bookings.length === 0 ? ( <p style={{ fontSize: '1.1rem', color: '#777' }}>You have no bookings yet.</p>) : (
    bookings.map((b,i) => (
      <div
      key={i}
      style={{
        marginBottom : '1.5 rem',
        padding : '1rem',
        border : '1px solid #ccc',
        borderRadius : '8px',
        backgroundColor : '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
      }}
      
      >   <p>
              <strong>{b.title}</strong>
            </p>
            <p>Departure: {b.departure}</p>
            <p>Date: {new Date(b.date).toLocaleDateString()}</p>
            <p>Adults: {b.passengers}</p>
            <p>Children: {b.children}</p>
            <p>Total Price: ₹{b.totalPrice}</p>
            <a
              href={`http://localhost:3001/api/bookings/receipt/${b._id}`} 
              target="_blank"
              rel="noopener noreferrer"
              
              style={{
                display: 'inline-block',
                marginTop: '0.5rem',
                padding: '0.4rem 1rem',
                backgroundColor: '#ffa500',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Download Receipt
            </a></div>
    ))
   ) }
    </div>
  )
}

export default MyBookings