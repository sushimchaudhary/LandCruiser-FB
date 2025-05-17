"use client";

import React from "react";

import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import ServicesSection from "@/services/servicesSection";
import GallerySection from "@/gallery/gallery";


import Testimonial from "@/testimonial/testimonial";
import SearchBar from "@/app/search/searchBar";
import NewsLetter from "@/app/search/newsLetter";

// Define the Home component using React.FC (Functional Component)
const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 py-16">

      {/* Container for Hero Section */}
      <Container>
        <Row className="flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <Col lg="6" className="ml-auto mb-8 md:mb-0">
            <Image
              src="/img10.jpg"
              alt="Lc"
              height={500}
              width={500}
              className="rounded-lg shadow-md mt-9 m-2 p-2 object-cover w-full md:w-auto justify-center"
            />
          </Col>

          {/* Right Content Section */}
          <Col lg="6" className="md:ml-6">
            <div className="Hero__content">
              {/* Subtitle and Icon */}
              <div className="flex items-center space-x-4 mb-4 pt-20">
                <span className="text-lg font-semibold text-red-500">
                  Know Before You Go !!
                </span>
                <Image
                  src="/world.jpg"
                  alt="world"
                  height={80}
                  width={80}
                  className="rounded-md shadow-md"
                />
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold mt-4 mb-6">
                Traveling opens the door to creating{" "}
                <span className="text-red-500">memories</span>
              </h1>

              {/* Description */}
              <p className="text-lg leading-relaxed">
                Explore the world and immerse yourself in new experiences.
                <br />
                Discover the beauty of diverse cultures, breathtaking
                landscapes,
                <br />
                and unforgettable moments.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Search Bar Component */}
      <SearchBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Experiences Section */}
      <section className="py-12 md:py-20 pl-9 bg-gray-50">
        <Container>
          <Row className="items-center flex-wrap md:flex-nowrap">

            {/* Experience Content */}
            <Col lg="6" className="mb-8 lg:mb-0">
              <div className="experienceContent">

                {/* Section Titles */}
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 inline-block align-middle">
                  Unforgettable Travel Experiences
                </h2>
                <h2 className="text-xl lg:text-2xl pl-4 font-semibold mb-6 text-red-500 inline-block align-middle">
                  With our extensive experience, we are dedicated to serving you.
                </h2>

                {/* Experience Description */}
                <p className="leading-relaxed mb-6 pl-10 text-gray-700 inline-block align-middle">
                  Embark on a journey with our meticulously crafted travel
                  experiences, designed to etch lasting memories. From thrilling
                  adventures to serene escapades, our diverse offerings cater to
                  every discerning traveler's desire.
                </p>

                {/* Key Highlights List */}
                <ul className="list-disc pl-10 mb-6 text-gray-700 inline-block align-middle">
                  <li className="mb-2 inline-block mr-4">
                    Expert-led guided tours by local connoisseurs
                  </li>
                  <li className="mb-2 inline-block mr-4">
                    Authentic cultural immersions for a deeper understanding
                  </li>
                  <li className="mb-2 inline-block mr-4">
                    Exhilarating adventure activities for the daring souls
                  </li>
                </ul>

                {/* Counters Section */}
                <div className="counter_wrapper pl-10 items-center gap-8 inline-block align-middle">
                  <div className="counter_box text-center inline-block mr-4">
                    <span className="text-2xl font-bold text-indigo-600">
                      12k+
                    </span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Successful Trips
                    </h6>
                  </div>
                  <div className="counter_box text-center inline-block mr-4">
                    <span className="text-2xl font-bold text-green-600">
                      3k+
                    </span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Regular Clients
                    </h6>
                  </div>
                  <div className="counter_box text-center inline-block">
                    <span className="text-2xl font-bold text-yellow-600">
                      14+
                    </span>
                    <h6 className="text-sm font-semibold text-gray-600 mt-1">
                      Years of Experience
                    </h6>
                  </div>
                </div>

              </div>
            </Col>

            {/* Experience Image */}
            <Col lg="6" className="flex-shrink-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <Image
                  src="/images/experience.jpg"
                  alt="Travel Experiences"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Newsletter Subscription Section */}
      <NewsLetter />

    </div>
  );
};

export default Home;
