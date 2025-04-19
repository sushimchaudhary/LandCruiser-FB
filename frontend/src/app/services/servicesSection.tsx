'use client';

import { Container, Col, Row } from 'reactstrap';
import ServiceList from './serviceList';
import FeaturedTours from '@/app/featured-tours/featuredTours';
import { Sparkles, Globe, Compass } from 'lucide-react'; // Lucide icons
import { Button } from '@/components/ui/button';
import React from 'react'; // (Important for TSX)

// Define a functional component
const ServicesSection: React.FC = () => {
  return (
    <>
      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <Container>
          <Col lg="8" className="mx-auto text-center mb-12">
            <Sparkles className="text-red-500 text-4xl mx-auto mb-4 animate-pulse" />
            <h5 className="text-red-500 text-xl font-semibold uppercase tracking-wider">
              Our Expertise
            </h5>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Crafting Unforgettable Travel Experiences
            </h2>
            <p className="text-lg text-gray-600">
              Discover the world with our meticulously planned and expertly guided tours.
              We offer a range of services to make your journey seamless and memorable.
            </p>
          </Col>

          {/* List of Services */}
          <ServiceList />
        </Container>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20">
        <Container>
          <Row className="justify-content-center mb-10">
            <Col lg="8" className="text-center">
              <div className="inline-flex items-center gap-2 mb-3 text-red-500">
                <Compass className="text-xl" />
                <span className="text-lg font-medium uppercase tracking-wider">
                  Explore the Best
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Our Featured Adventures
              </h2>
              <p className="text-lg text-gray-600 mt-3">
                Handpicked tours showcasing the most breathtaking destinations and unique experiences.
              </p>
            </Col>
          </Row>

          {/* Display Featured Tours */}
          <FeaturedTours />
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 bg-gray-400 text-white">
        <Container className="text-center">
          <Globe className="text-white text-5xl mx-auto mb-6 animate-spin" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Embark on Your Dream Journey?
          </h2>
          <p className="text-lg mb-8">
            Let us help you plan your next adventure. Browse our tours or contact our
            expert team for personalized assistance.
          </p>

          {/* Optional CTA Button */}
          <Button 
              color="light" 
              size="lg" 
              className="text-red-500 font-bold rounded-full px-8 py-3 hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
            Explore All Tours
          </Button>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
