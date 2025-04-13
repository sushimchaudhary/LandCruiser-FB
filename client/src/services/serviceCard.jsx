import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ item }) => {
  const { imgUrl, title, description } = item;

  return (
    <div className="bg-white rounded-lg shadow-md p-5 text-center transition-transform hover:scale-105">
      <div className="w-full h-40 relative">
        <Image 
          src={imgUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h5 className="mt-4 text-xl font-semibold text-gray-900">{title}</h5>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
