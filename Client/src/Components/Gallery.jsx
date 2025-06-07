import React from 'react'
import "./Gallary.css";

const images = [
    "/customerPhotos/customer1.jpg",
      "/customerPhotos/customer2.jpg",
     "/customerPhotos/customer3.jpg",
      "/customerPhotos/customer4.jpg",
       "/customerPhotos/customer5.jpg",
        "/customerPhotos/customer6.jpg",
         "/customerPhotos/customer7.jpg",
          "/customerPhotos/customer8.jpg",
           "/customerPhotos/customer9.jpg",
            "/customerPhotos/customer10.jpg",
             "/customerPhotos/customer11.jpg",
              "/customerPhotos/customer12.jpg",
               "/customerPhotos/customer13.jpg",
                "/customerPhotos/customer14.jpg",
                 "/customerPhotos/customer15.jpg",
                 "/customerPhotos/customer16.jpg",
                 "/customerPhotos/customer17.jpg",

]

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <h3 style={{fontSize : "1.1rem", fontWeight : 'bold', backgroundColor: 'orange', borderRadius : "999px",display:'inline-block', padding : '10px 22px',fontFamily:'sans-serif'}}>Gallery</h3>
        <h1 >Visit our customers tour gallery</h1>
        <div  className="masonry-grid">
            {images.map((src, index) => (
          <div className="masonry-item" key={index}>
            <img src={src} alt={`Gallery ${index}`} />
          </div>
        ))}

        </div>
    </div>
  )
}

export default Gallery