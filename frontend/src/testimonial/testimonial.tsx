import Image from 'next/image';
import React from 'react';
import Slider from "react-slick"; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
  };

  const testimonials = [
    {
      id: 1,
      name: 'Rohan',
      role: 'Customer',
      image: '/img1.jpg',
      quote:
        "The experience was smooth from start to finish. I received exactly what I was looking for — great quality and quick service!",
    },
    {
      id: 2,
      name: 'Priya',
      role: 'Loyal Client',
      image: '/img2.jpg',
      quote:
        "I’ve been a returning customer for a reason. Every order feels personalized and the team truly cares about satisfaction.",
    },
    {
      id: 3,
      name: 'Amit',
      role: 'New User',
      image: '/img3.jpg',
      quote:
        "As a first-time user, I was amazed at how easy it was to browse, choose, and place my order. Highly recommend it!",
    },
  ];

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          What Our Clients Say
        </h2>
        <div className="w-full max-w-2xl">
          <Slider {...settings}>
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col bg-white p-8 rounded-xl shadow-md"
              >
                <p className="text-lg italic text-gray-700 text-center mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <h5 className="text-md font-semibold text-gray-800">
                      {t.name}
                    </h5>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
