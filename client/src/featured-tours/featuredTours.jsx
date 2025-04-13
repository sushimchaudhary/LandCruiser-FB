'use client'

import toursDetails from '@/pages/toursdetails';
import TourCard from '@/search/TourCard';
import React from 'react';
import { Col } from 'reactstrap';

const FeaturedTours = () => {
  return (
    <div className="flex flex-wrap gap-6">
      {toursDetails.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </div>
  );
};

export default FeaturedTours;
