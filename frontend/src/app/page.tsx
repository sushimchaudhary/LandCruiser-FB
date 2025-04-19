'use client';

import React from 'react';
import Image from 'next/image';

// Import custom components
import Header from './(user)/header/page';
import SearchBar from './search/searchBar';
import ServicesSection from './services/servicesSection';
import Testimonial from './testimonial/testimonial';
import NewsLetter from './search/newsLetter';

// Define Home component
const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 py-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4">
        <Header />

        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/img10.jpg"
              alt="Travel"
              height={500}
              width={500}
              className="rounded-lg shadow-md mt-9 m-2 p-2 object-cover w-full"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="Hero__content">
              {/* Subtitle with Icon */}
              <div className="flex items-center space-x-4 mb-4 pt-20">
                <span className="text-lg font-semibold text-red-500">
                  Know Before You Go !!
                </span>
                <Image
                  src="/world.jpg"
                  alt="World Icon"
                  height={80}
                  width={80}
                  className="rounded-md shadow-md"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold mt-4 mb-6">
                Traveling opens the door to creating{' '}
                <span className="text-red-500">memories</span>
              </h1>

              {/* Description */}
              <p className="text-lg leading-relaxed">
                Explore the world and immerse yourself in new experiences.
                <br />
                Discover the beauty of diverse cultures, breathtaking landscapes,
                <br />
                and unforgettable moments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <SearchBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Experiences Section */}
      <section className="py-12 md:py-20 pl-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Experience Text Content */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="experienceContent">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  Unforgettable Travel Experiences
                </h2>
                <h2 className="text-xl lg:text-2xl pl-4 font-semibold mb-6 text-red-500">
                  With our extensive experience, we are dedicated to serving you.
                </h2>
                <p className="leading-relaxed mb-6 pl-4 text-gray-700">
                  Embark on a journey with our meticulously crafted travel
                  experiences, designed to etch lasting memories. From thrilling
                  adventures to serene escapades, our diverse offerings cater to
                  every discerning traveler's desire.
                </p>

                {/* Key Points List */}
                <ul className="list-disc pl-10 mb-6 text-gray-700">
                  <li className="mb-2">Expert-led guided tours by local connoisseurs</li>
                  <li className="mb-2">Authentic cultural immersions for a deeper understanding</li>
                  <li className="mb-2">Exhilarating adventure activities for the daring souls</li>
                </ul>

                {/* Counters */}
                <div className="flex gap-8 pl-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-indigo-600">12k+</span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Successful Trips
                    </h6>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-green-600">3k+</span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Regular Clients
                    </h6>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-yellow-600">14+</span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Years of Experience
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* You can later add another image or any other section on right side if you want */}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <Testimonial />

      {/* Newsletter Section */}
      <NewsLetter />
    </div>
  );
};

export default Home;
