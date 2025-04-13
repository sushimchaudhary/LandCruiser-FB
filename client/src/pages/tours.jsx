"use client";
import CommanSection from '@/search/commanSection';
import SearchBar from '@/search/searchBar';
import TourCard from '@/search/TourCard';
import React from 'react';
import toursDetails from './toursdetails';
import { Col, Row, Container } from 'reactstrap';
import ServicesSection from '@/services/servicesSection';

const Tours = () => {
  return (
    <div>
      <CommanSection title={"All Tours"} />

      <section className="py-6">
        <Container>
          <SearchBar />          
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <Row>
            {toursDetails?.map((tour) => (
              <Col lg="4" md="6" sm="12" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Tours;
