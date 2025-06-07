import React from 'react'
import { useLocation } from 'react-router-dom';
import tours from '../assets/data/tours';
import {useNavigate} from "react-router-dom";
import Intro from './Intro';
import Gallery from './Gallery';
import TourCard from './TourCard';
import Services from './Services';
export const Home = () => {
  const location = useLocation()
  const bookingSuccess = location.state?.bookingSuccess
  


  const navigate = useNavigate()
 const storedUser = localStorage.getItem("user");
const user = storedUser ? JSON.parse(storedUser) : null;
 const message = {
   padding: '12px 24px',
        fontSize: '26px',
        fontWeight: 'bold',
        color: 'darkblue',
        backgroundColor: 'Orange',
        borderRadius: '5px',
       
        marginBottom: '30px',
        maxWidth: '300px'
}
 
 
  if (!user) {
    console.log("1")
    return <div >User not found or not logged in.</div>
  }

  return (
    <div style={{  paddingTop: '150px',  // ✅ Enough space below fixed navbar
      paddingLeft: '20px',
      paddingRight: '20px',
      backgroundColor: '#f0ffff' }}> 
    <div style={message}>Welcome Home, {user.name}</div>

    {bookingSuccess && (
        <div className="alert" style={{
          padding: '12px',
          backgroundColor: '#d4edda',
          color: '#155724',
          borderRadius: '6px',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
          🎉 Booking confirmed!
        </div>
      )}
    <Intro/>
    <h3 style={{fontSize : "1.1rem", fontWeight : 'bold', backgroundColor: 'orange', borderRadius : "999px",display:'inline-block', padding : '10px 22px',fontFamily:'sans-serif'}}>Explore</h3>
    <h1>Our Featured Tours</h1>

      <div style={{
      
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '50px',
        paddingBottom: '50px',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflowX: 'auto'
        }}>

            
      <TourCard/>
      </div>
         <Gallery/>
          
 <Services/>

    </div>
    
  )
  
}
