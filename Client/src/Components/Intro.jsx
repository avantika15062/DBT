import React,  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaRulerCombined, FaUsers, FaSearch } from 'react-icons/fa';
import './Intro.css'
const Intro = () => {
   const [location, setLocation] = useState('');
  const [maxPeople, setMaxPeople] = useState(1);
  const navigate = useNavigate();


  const handleSearch = () => {
    const trimmedLocation = location.trim().toLowerCase();
    if (trimmedLocation ) {
      navigate(`/search?location=${trimmedLocation}&people=${maxPeople}`)
    } else{
      alert('Please Enter a location.')
    }
  }
  return (
     <div className="intro-wrapper">
      <div className="intro-text">
        <p className="intro-tagline">Your partner in every travel</p>
        <h1 className="intro-heading">
          Traveling opens the door to creating <span className="highlight">memories</span>
        </h1>
        <p className="intro-description">
          "Whether you're planning a weekend getaway or the adventure of a lifetime, traveling lets you explore new
          places, meet amazing people, and create unforgettable memories. Let us help you discover destinations that
          inspire and experiences that stay with you forever."
        </p>
         <div className="intro-searchbar">
          <div className="search-bar">
            <div className="input-group">
              <FaMapMarkerAlt className="icon" />
              <div className="input-label">
                <span className="label">Location</span>
                <input type="text" 
                value={location}
                onChange={ (e) => setLocation(e.target.value)}
                placeholder="Enter Location" />
              </div>
            </div>

            <div className="divider" />
           

            <div className="input-group">
              <FaUsers className="icon" />
              <div className="input-label">
                <span className="label">Max People</span>
                <input  type="number"
                  value={maxPeople}
                  onChange={(e) => setMaxPeople(e.target.value)}
                  min="1" />
              </div>
            </div>
              <button className="search-btn" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>
           </div>

      </div>

      
      <div className="intro-cards">
       <div className="card">
          <video controls muted>
            <source src="/videos/tourVideo2.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="card">
          <video controls muted>
            <source src="/videos/tourVideo1.mp4" type="video/mp4" />
          </video>
        </div>

       <div className="card">
          <video controls muted>
            <source src="/videos/tourVideo3.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  )
}

export default Intro