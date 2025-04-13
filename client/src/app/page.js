"use client";
import React from "react";
import SearchBar from "@/search/searchBar";

import Image from "next/image";
import { Col, Container, Row } from "reactstrap";
import ServicesSection from "@/services/servicesSection";
import { Subtitles } from "lucide-react";
import GallerySection from "@/Image-gallery/galleryImage";
import Testimonial from "@/Testimonial/testimonial";
import NewsLetter from "@/search/newsLetter";

const Home = () => {
  return (
    <div className="bg-white text-gray-900 py-16">
      <Container>
        <Row className="flex flex-col md:flex-row items-center">
          {" "}
          {/* Stack for mobile, side by side on desktop */}
          <Col lg="6" className="ml-auto mb-8 md:mb-0">
            {" "}
            {/* Adjusting for mobile screens */}
            {/* Left Image */}
            <Image
              src="/img10.jpg"
              alt="Lc"
              height={500}
              width={500}
              className="rounded-lg shadow-md mt-9 m-2 p-2 object-cover w-full md:w-auto justify-center"
            />
          </Col>
          {/* Right Content */}
          <Col lg="6" className="md:ml-6">
            <div className="Hero__content">
              {/* Subtitle & Small Image */}
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

      {/* Search Bar */}
      <SearchBar />
      <ServicesSection />



      {/* ------------- experiences section start */}
      <section className="py-12 md:py-20 pl-9 bg-gray-50">
        <Container>
          <Row className="items-center flex-wrap md:flex-nowrap">
            {" "}
            {/* Use flex-wrap for smaller screens */}
            <Col lg="6" className="mb-8 lg:mb-0 ">
              <div className="experienceContent">
               
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 inline-block align-middle">
                  Unforgettable Travel Experiences
                </h2>
                <h2 className="text-xl lg:text-2xl pl-4 font-semibold mb-6 text-red-500 inline-block align-middle">
                  With our extensive experience, we are dedicated to serving
                  you.
                </h2>
                <p className="leading-relaxed mb-6 pl-10 text-gray-700 inline-block align-middle">
                  Embark on a journey with our meticulously crafted travel
                  experiences, designed to etch lasting memories. From thrilling
                  adventures to serene escapades, our diverse offerings cater to
                  every discerning traveler's desire.
                </p>
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
                {/* Optional button - make inline if needed */}
                {/* <button className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600 mt-6 inline-block">Explore More</button> */}
              </div>
            </Col>
            <Col lg="6" className="flex-shrink-0">
              {" "}
              {/* Prevent image from shrinking too much */}
              {/* <div className="relative rounded-lg overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                <Image
                  src="/images/experience.jpg"
                  alt="Travel Experiences"
                  layout="fill"
                  objectFit="contain" // Use 'contain' to fit within the available space
                  className="rounded-lg"
                />
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>

      <GallerySection/>

      {/* ---------testimonial section start */}
      <Testimonial/>

      <NewsLetter/>





    </div>
  );
};

export default Home;
