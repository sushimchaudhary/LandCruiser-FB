import React from 'react';

import { Button } from '@/components/ui/button';


const newsLetter = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        {/* Image Section */}
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
          <div className="relative aspect-w-16 aspect-h-9">
            <img
              src={'/subscribe.jpg'} 
              alt="Subscribe Now"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Subscribe now to get useful travling information..</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Subscribe to our newsletter and never miss out on the latest news,
            exclusive offers, and exciting updates. Join our community today!
          </p>
          <div className="mt-4">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full sm:w-auto px-4 py-3 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <Button
                type="submit"
                className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 cursor-pointer rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default newsLetter;