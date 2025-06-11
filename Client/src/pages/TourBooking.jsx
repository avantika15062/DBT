import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



const TourBooking = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { image, title, city,price } = location.state || {};
  console.log("PRICE:", price, typeof price); // ✅ should log number

 
  const [departureDate, setDepartureDate] = useState('');
  const [passengers, setPassengers] = useState('0');
  const [children, setChildren] = useState('0');
  const [departure, setDeparture] = useState('')
  const [preference, setPreference] = useState('')
 
  const passengerCount = parseInt(passengers, 10) || 0;
const childCount = parseInt(children, 10) || 0;
const actualPrice = Number(price) || 0;


const childCost = 0.5 * actualPrice;
const totalCost = (actualPrice * passengerCount) + (childCost * childCount);

const loadRazorpayScript = async() => {
const script = document.createElement('script');
script.src ='https://checkout.razorpay.com/v1/checkout.js';
script.onload =()=> initPayment();
script.onerror = () => alert('Failed to load Razorpay Script')
document.body.appendChild(script)
}

const initPayment = async () => {
  const bookingData = {
     title,
      location: city,
      departure,
      date: departureDate,
      passengers: passengerCount,
      children: childCount,
      totalPrice: totalCost
  }
    const { data: order } = await axios.post('http://localhost:3001/api/payment/create-order', {
      amount: totalCost,
    });
     const options = {
      key: 'rzp_test_vuel4C2a8Bi4xI',
      amount: order.amount,
      currency: 'INR',
      name: 'DBT Travels',
      description: `Booking for ${title}`,
      order_id: order.id,
      handler: async (response) => {
        alert('Payment successful! ID: ' + response.razorpay_payment_id);
        await axios.post('http://localhost:3001/addBooking', bookingData, {
  withCredentials: true
});
        navigate('/home', {
          state: {
            bookingSuccess: true,
            user: location.state?.user,
          },
        });
      },
      prefill: {
        name: 'Traveler',
        email: 'test@example.com',
      },
      theme: {
        color: '#1e40af',
      },
    };
     const rzp = new window.Razorpay(options);
    rzp.open();
}
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!window.Razorpay) {
      await loadRazorpayScript();
    } else {
      initPayment();
    }
  };

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //    const bookingData = {
  //   title,
  //   location: city,
  //   departure,
  //   date: departureDate,
  //   passengers: passengerCount,
  //   children: childCount,
  //   totalPrice: totalCost
  // };
  // try {
  //   const res = await axios.post("http://localhost:3001/addBooking",bookingData)
  //   console.log("Booking Succesfull",res.data)
  //    alert(`Booking tour to ${city} on ${departure} for ${passengers}`);
  //    navigate("/home",{state : {bookingSuccess : true,
    
  //    }})
    
  // } catch (error) {
  //   console.error("Booking Error", error)
  //    alert('Failed to complete booking. Please try again.');
  // }
   
  // };

  if (!image) {
    return <p>No tour data found. Please go back and select a tour.</p>;
  }

  return (
    
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image}) no-repeat center center/cover`,
      padding: '2rem',
      paddingTop: '140px',
    }}
  >
    <div
      style={{
        display: 'flex',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '16px',
        padding: '2rem',
        maxWidth: '1000px',
        width: '100%',
        gap: '2rem',
      }}
    >
      {/* LEFT COLUMN: Title + Form */}
      <div style={{ flex: 1 }}>
        <h1 style={{ marginBottom: '0.5rem' }}>{title}</h1>
       
        <form
          onSubmit={handlePayment}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >

           <div style={{display:'flex', flexDirection:'column', gap:'0.2rem'}}>
          <label style={{ fontWeight: 'bold' }}>Departure</label>
             <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '6px',
                width: '250px',
                border: '1px solid #ccc',
              }}
            >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
  
            
            </select>
          </div>

         
           
          <div style={{display:'flex', flexDirection:'column', gap:'0.2rem'}}>
          <label style={{ fontWeight: 'bold' }}>  Departure Date</label>
           
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              required
              style={{
                padding: '10px',
                borderRadius: '6px',
                width: '250px',
                border: '1px solid #ccc',
              }}
            />
         
          </div>


             {/* <div style={{display:'flex', flexDirection:'column', gap:'0.2rem'}}>
          <label style={{ fontWeight: 'bold' }}>Departure</label>
             <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '6px',
                width: '250px',
                border: '1px solid #ccc',
              }}
            >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
  
            
            </select>
          </div> */}

 <div style={{display:'flex', flexDirection:'column', gap:'0.2rem'}}>
          <label style={{ fontWeight: 'bold' }}>Passengers </label>
          
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              style={{
                padding: '10px',
                borderRadius: '6px',
                width: '250px',
                border: '1px solid #ccc',
              }}
            >
            <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
            
            </select>

</div>
<div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
  <label style={{ fontWeight: 'bold' }}>Children</label>
  <select
    value={children}
    onChange={(e) => setChildren(e.target.value)}
    style={{
      padding: '10px',
      borderRadius: '6px',
      width: '250px',
      border: '1px solid #ccc',
    }}
  >
    {[...Array(6)].map((_, i) => (
      <option key={i} value={i}>{i}</option>
    ))}
  </select>
</div>


    
          <button
            type="submit"
         
            style={{
              padding: '10px',
              backgroundColor: '#1e40af',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              width: '250px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Payment
          </button>
        </form>
      </div>

      {/* RIGHT COLUMN: Order Summary */}
      <div
        style={{
          flex: 1,
          background: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
          height: 'fit-content',
        }}
      >
        <h3>Order Summary</h3>
        <p><strong>Departure From:</strong> {departure}</p>
        <p><strong>Location:</strong> {city}</p>
        <p><strong>Date:</strong> {departureDate || 'Select a date'}</p>
        <p><strong>Passengers:</strong> {passengers}</p>
         <p><strong>Children:</strong> {children}</p>
        <hr />
      <p><strong>Total:</strong> ₹{isNaN(totalCost) ? '0' : totalCost.toLocaleString()}</p>

      </div>
    </div>
  </div>
);

};

export default TourBooking;
