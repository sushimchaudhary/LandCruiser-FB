import React from 'react';
import { Col, Row } from 'reactstrap';
import ServiceCard from './serviceCard';


const servicesData = [
  {
    imgUrl: "/planning.jpg",
    title: "Travel Planning",
    description: "Plan your perfect trip with our expert recommendations and itinerary assistance.",
  },
  {
    imgUrl: "/booking.jpg",
    title: "Hotel Booking",
    description: "Find and book the best hotels at great prices for a comfortable stay.",
  },
  {
    imgUrl: "/guide.jpg",
    title: "Tour Guide",
    description: "Explore new destinations with experienced local tour guides.",
  },
  
  {
    imgUrl: "/adventure.jpg",
    title: "Adventure Trips",
    description: "Experience thrilling adventure activities like hiking, rafting, and more.",
  },
];

const ServiceList = () => {
  return (
    // display desktop
    <Row className='flex gap-3 m-4 p-4'>
      {servicesData.map((item, index) => (
        <Col lg="4" md="6" sm="12" key={index} className="mb-4">
          <ServiceCard item={item} />
        </Col>
      ))}
    </Row>

    //display mobile app
    
  );
};

export default ServiceList;
