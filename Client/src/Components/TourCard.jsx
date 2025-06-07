import React from 'react'
import {useNavigate} from "react-router-dom";
import {FaDownload}  from "react-icons/fa";

import "./TourCard.css"


const tours = [
    {
      id: "01",
      title: "Chalo Himachal!!",
      city: "Himachal Pradesh",
      duration:"5 Nights 4 Days",
      price: 18999,
    
      desc: "Explore the beautiful Himachal hills with us!",
    
      avgRating: 4.5,
      image : "/tour-images/himachal.jpg",
       itineraryPDF:"/pdfs/Himachal%20DBT%202025.pdf",
     
     
      featured: true,
    },

    {
      id : '02',
      title : "Dev Bhoomi Darshan!",
      city : 'Uttarakhand',
      duration : "5 Nights 4 Days",
      price : 22000,
      maxGroupSize : 10,
      desc : "Immerse in the divinity",
       reviews: [
        { name: "John Doe", rating: 4.6 },
      ],
      avgRating: 4.8,
      image : "/tour-images/charDham.jpg",
       itineraryPDF: "/pdfs/Char-Dham%20DBT%202025.pdf",
      featured: true,


    },
     {
      id : '03',
      title : "Padharo Maare Desh!",
      city : 'Rajasthan',
      duration : "5 Nights 4 Days",
      price : 22000,
      maxGroupSize : 10,
      desc : "Experience Royalty,here at Rajasthan",
       reviews: [
        { name: "John Doe", rating: 4.6 },
      ],
      avgRating: 4.8,
      image : "/tour-images/rajasthan.jpg",
      featured: true,


    },
     {
      id : '04',
      title : "Jai Jai Shri Mahakal!",
      city : 'Madhya Pradesh',
      duration : "3 Nights 4 Days",
      price : 8000,
      maxGroupSize : 10,
      desc : "Experience divinity here",
       reviews: [
        { name: "John Doe", rating: 4.6 },
      ],
      avgRating: 4.8,
      image : "/tour-images/mahakal.jpg",
      featured: true,


    },
     {
      id : '05',
      title : "Kuch to nasha hai pahado mein!!",
      city : 'Jammu',
      duration : "5 Nights 4 Days",
      price : 22000,
      maxGroupSize : 10,
      desc : "Immerse in the beauty of Mountains",
       reviews: [
        { name: "John Doe", rating: 4.6 },
      ],
      avgRating: 4.8,
      image : "/tour-images/ladakh.jpg",
      featured: true,


    },
     {
      id : '06',
      title : "Blue hai pani pani!",
      city : 'Goa',
      duration : "5 Nights 4 Days",
      price : 22000,
      maxGroupSize : 10,
      desc : "Witness amazing beaches",
      itineraryPDF: "/pdfs/Goa-DBT%202025.pdf",
    
      avgRating: 4.8,
      image : "/tour-images/goa.jpg",
      featured: true,


    },

      {
      id: "07",
      title: "Chalo Hampi!!",
      city: "Hampi",
      duration:"5 Nights 4 Days",
      price: 18999,
      maxGroupSize: 10,
      desc: "Explore the beautiful Himachal hills with us!",
      reviews: [
        { name: "John Doe", rating: 4.6 },
      ],
      avgRating: 4.5,
      image : "/tour-images/hampi.jpg",
     
      featured: true,
    },

     {
      id: "08",
      title: "Keral",
      city: "Kerala",
      duration:"5 Nights 4 Days",
      price: 18999,
      maxGroupSize: 10,
   
      avgRating: 4.5,
      image : "/tour-images/kerala.jpg",
     
      featured: true,
    },
     {
      id: "09",
      title: "Rameshwaram",
      city: "Rameshwaram,Tamil Nadu",
      duration:"5 Nights 4 Days",
      price: 18999,
      maxGroupSize: 10,
   
      avgRating: 4.5,
      image : "/tour-images/Rameshwaram.jpg",
     
      featured: true,
    },

  ]
   

  const SingleTourCard = ({image,city,title,price,rating,featured,itineraryPDF}) => {
    const navigate = useNavigate()
  return (
     
    <div className='tour-card'>
      
        <div className='tour-image'>
            <img src={image} alt={title}/>
            {featured && <span className='featured-badge'>Featured</span>}

        </div>
        <div className='tour-details'>
            <div className='tour-meta'>
                 <span className="city">📍 {city}</span>
          <span className="rating">⭐ {rating || "Not rated"}</span>
            </div>

            <h3>{title}</h3>
          <a href={itineraryPDF} download={city} className="itinerary-link">
  Itinerary <FaDownload style={{ marginLeft: "6px" }} />
</a>
          

        <div className='price-section'>
            <span className='price'>Rs.{price}<small>/per person</small></span>
            <button onClick={()=>navigate("/booking", {
              state :{
                image,
                title,
                city,
              price: Number(price),
              },
            })} className='book-btn' >Book Now</button>
        </div>
        </div>
    </div>
  )
}

const TourCard = () => {
  return (
    <div className="tour-list">
      {tours.map(tour => (
        <SingleTourCard
          key={tour.id}
          title={tour.title}
          image={tour.image}
          city={tour.city}
          price={tour.price}
          itineraryPDF={tour.itineraryPDF}
          rating={tour.avgRating}
          featured={tour.featured} 
        />
      ))}
    </div>
  );
};

export default TourCard;
export { SingleTourCard };