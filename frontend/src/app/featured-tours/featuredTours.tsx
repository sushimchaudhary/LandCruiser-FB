'use client';

import React from "react";
import TourCard from "@/app/search/TourCard";
import tourList from "@/app/(user)/toursdetails/tourData";

// import useFetch from "@/hooks/useFetch";
// import { BASE_URL } from "@/utlis/config";

const FeaturedTours = () => {
  // const { data: featuredTours, loading, error } = useFetch(
  //   `${BASE_URL}/tours/search/getFeaturedTours`);

  // if (loading) return <div className="text-center">Loading...</div>;
  // if (error) return <div className="text-center text-red-500">{error}</div>;
  // console.log(featuredTours);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {tourList?.map((tour) => (
          <div key={tour.id} className="flex flex-col">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTours;
