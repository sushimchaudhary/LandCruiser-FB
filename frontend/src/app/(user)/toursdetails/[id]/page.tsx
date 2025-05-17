'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';
import calculateAvgRating from '@/utlis/calculateAvgRating';

import Booking from '../../booking/page';

type Review = {
  id: string;
  userId: string;
  comment: string;
  rating: number;
};

type Tour = {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
  reviews: Review[];
};

const TourDetails = () => {
  const { id } = useParams();
  const tourId = Number(id);

  const [tour, setTour] = useState<Tour | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({
    userId: '',
    comment: '',
    rating: 0,
  });

  const [totalRating, setTotalRating] = useState<number>(0);
  const [avgRating, setAvgRating] = useState<number>(0);

  const reviewMsgRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(`/api/tours/${tourId}`);
        if (!res.ok) throw new Error('Failed to fetch tour data');

        const data = await res.json();
        setTour(data);
        setReviews(data.reviews || []);

        const { totalRating, avgRating } = calculateAvgRating(data.reviews || []);
        setTotalRating(totalRating);
        setAvgRating(avgRating);
      } catch (error) {
        console.error('Error fetching tour:', error);
        toast.error('Could not load tour details.');
      }
    };

    if (tourId) {
      fetchTour();
    }
  }, [tourId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const { userId, comment, rating } = newReview;

    if (userId && comment && rating) {
      const newReviewObj: Review = {
        id: `r${Math.random()}`,
        userId,
        comment,
        rating,
      };

      const updatedReviews = [...reviews, newReviewObj];
      const { totalRating, avgRating } = calculateAvgRating(updatedReviews);
      setReviews(updatedReviews);
      setTotalRating(totalRating);
      setAvgRating(avgRating);

      setNewReview({ userId: '', comment: '', rating: 0 });
      if (reviewMsgRef.current) reviewMsgRef.current.value = '';
      if (commentRef.current) commentRef.current.value = '';

      toast.success('Review submitted successfully 🎉');
    } else {
      toast.error('Please fill all fields 😟');
    }
  };

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl font-semibold">Loading tour...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 mt-20">
      {/* Tour Info */}
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={tour.image}
          alt={tour.title}
          className="rounded-2xl shadow-lg object-cover w-full md:w-1/2 max-h-[500px]"
        />
        <div className="flex-1 space-y-6 mt-10">
          <h2 className="text-3xl font-bold text-gray-800">{tour.title}</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500 text-2xl font-semibold">
              {reviews.length > 0 ? `${avgRating.toFixed(1)} ⭐` : 'Not rated yet'}
            </span>
            {reviews.length > 0 && (
              <span className="text-gray-500 text-md">
                ({reviews.length} review{reviews.length > 1 ? 's' : ''})
              </span>
            )}
          </div>
          <p className="text-gray-600 text-lg">📍 Location: {tour.location}</p>
          <p className="text-gray-700 text-2xl font-semibold">
            💵 Price: <span className="text-green-600">${tour.price} /person</span>
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🌍 Tour Description</h2>
        <p className="text-lg text-gray-700">{tour.description}</p>
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">📝 Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-semibold text-gray-700 mb-2">👤 {review.userId}</p>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Review & Booking */}
      <div className="mt-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-2/4 bg-gray-100 p-8 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Your Review ✍️</h2>
            <form onSubmit={submitHandler} className="space-y-5">
              <input
                type="text"
                name="userId"
                ref={reviewMsgRef}
                value={newReview.userId}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              />
              <textarea
                name="comment"
                ref={commentRef}
                value={newReview.comment}
                onChange={handleInputChange}
                placeholder="Your Comment"
                rows={4}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none"
              ></textarea>
              <div className="flex items-center space-x-2">
                <label className="text-lg text-gray-700">Rating:</label>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className={`text-2xl ${
                      newReview.rating >= star ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div>

          {/* Booking Form */}
          <div className="w-full lg:w-1/3">
            <Booking tour={tour} avgRating={avgRating} totalReviews={reviews.length} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
