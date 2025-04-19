'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // useParams for getting dynamic id
import tourList from '../tourData/page';




const TourDetailsPage = () => {
  const { id } = useParams(); // get id from URL
  const tourId = Number(id); // make sure it's a number
  const tour = tourList.find(t => t.id === tourId); // find the tour

  if (!tour) {
    return <div>Tour not found!</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{tour.title}</h1>
      <img src={tour.image} alt={tour.title} className="rounded-lg mb-4 w-full max-w-md" />
      <p className="text-lg">Location: {tour.location}</p>
      <p className="text-lg">Price: ${tour.price}</p>
      {/* Add more details as you want */}
    </div>
  );
};

export default TourDetailsPage;
