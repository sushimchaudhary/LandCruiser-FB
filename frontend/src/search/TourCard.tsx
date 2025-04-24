"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Card, CardBody } from "reactstrap";
import { MapPin, Star } from "lucide-react";
import calculateAvgRating from "@/utlis/avgRating";

// Define the types for props
interface Review {
  rating: number;
  [key: string]: any; // Accepting any other fields in reviews if present
}

interface Tour {
  id: string;
  title?: string;
  image?: string;
  price?: number;
  featured?: boolean;
  avgRating?: number;
  reviews?: Review[] | number;
  location?: string;
}

interface TourCardProps {
  tour: Tour;
}

// Functional Component with props typed
const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const {
    id,
    title = "Unknown Tour",
    image = "/images/default.jpeg",
    price = 0,
    featured = false,
    avgRating: initialAvgRating = 0,
    reviews,
    location = "Nepal",
  } = tour || {};

  // Calculate average rating
  const calculatedAvgRating = calculateAvgRating(reviews, initialAvgRating);

  // Calculate review count based on reviews type
  let reviewCount = 0;
  if (Array.isArray(reviews)) {
    reviewCount = reviews.length;
  } else if (typeof reviews === "number") {
    reviewCount = reviews;
  }

  return (
    <div className="pl-5 justify-center">
      {/* Card Wrapper */}
      <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Section */}
        <div className="relative w-full h-60">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {/* Featured Badge */}
          {featured && (
            <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
              Featured
            </span>
          )}
        </div>

        {/* Card Body */}
        <CardBody className="p-5">
          {/* Location and Rating */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            {/* Location */}
            <div className="flex items-center gap-1">
              <MapPin className="text-red-500" size={16} />
              {location}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star className="text-yellow-400" size={16} fill="currentColor" />
              {calculatedAvgRating > 0 ? calculatedAvgRating.toFixed(1) : "N/A"}
              <span className="text-gray-400">
                ({reviewCount} {reviewCount === 1 ? "Review" : "Reviews"})
              </span>
            </div>
          </div>

          {/* Tour Title */}
          <h3 className="text-lg font-semibold text-gray-800 hover:text-red-500 transition-colors mb-2">
            <Link href={`/toursdetails/${tour.id}`}>
              <h3 className="text-xl font-bold text-red-600 hover:underline">
                {tour.title}
              </h3>
            </Link>
          </h3>

          {/* Price and Book Button */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <h4 className="text-xl font-bold text-gray-800">${price}</h4>
              <span className="text-sm text-gray-500">/per person</span>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
              <Link href={`/tours/${id}`}>Book Now</Link>
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
