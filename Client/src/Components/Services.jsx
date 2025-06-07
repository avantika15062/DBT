import React from 'react';

const services = [
  {
    icon: 'fa-plane',
    title: 'Flight Booking',
    desc: 'Book domestic and international flights at the best prices.',
    link: '/flights',
  },
  {
    icon: 'fa-map-marked-alt',
    title: 'Custom Tours',
    desc: 'Tailor-made travel itineraries based on your interests.',
    link: '/tours',
  },
  {
    icon: 'fa-hotel',
    title: 'Hotel Booking',
    desc: 'Handpicked hotels and resorts with great deals.',
    link: '/hotels',
  },
   {
    icon: 'fa-train-subway', // you can also use 'fa-train'
    title: 'Train Booking',
    desc: 'Convenient train ticket booking for all major routes.',
    link: '/trains',
  },
];

const Services = () => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '50px 20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Services We Provide</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                width: '250px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              className="service-card"
            >
              <i
                className={`fas ${service.icon}`}
                style={{ fontSize: '40px', color: '#004aad', marginBottom: '15px' }}
              ></i>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
