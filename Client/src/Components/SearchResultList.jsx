import React from 'react'
import tours from '../assets/data/tours';
import TourCard, { SingleTourCard } from './TourCard'; // Make sure it's exported individually

import { useLocation } from 'react-router-dom';




const SearchResultList = () => {
  const {search} = useLocation()
const searchParams = new URLSearchParams(search)
const queryLocation = searchParams.get('location')
const peopleQuery = searchParams.get('people'); 

const filteredTours = tours.filter(tour => 
  tour.city.toLowerCase().includes(queryLocation)
)
  return (
    <div style={{ paddingTop: '100px', padding: '2rem' }}>
      <h2>Search Results for "{queryLocation}"</h2>
       <p>Max People: {peopleQuery}</p>
     {filteredTours.length > 0 ? (
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {filteredTours.map(tour => (
      <SingleTourCard key={tour.id} {...tour} />
    ))}
  </div>
) : (
  <p>No tours found for this location.</p>
)}

    </div>
  )
}

export default SearchResultList