'use client';


import TourCard from '@/app/search/TourCard';
import React from 'react';
import tourList from '../toursdetails/tourData/page';



const FeaturedTours = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {tourList.map((tour) => (
          <div key={tour.id} className="flex flex-col">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTours;
