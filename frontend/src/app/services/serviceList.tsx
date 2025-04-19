'use client';

import React from 'react';
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
    imgUrl: "/guides.jpeg",
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((item, index) => (
          <div key={index} className="w-full">
            <ServiceCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
