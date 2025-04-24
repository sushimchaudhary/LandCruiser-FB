import Image from "next/image";
import React from "react";

// Define the type for the item prop
interface ServiceItem {
  imgUrl: string;
  title: string;
  description: string;
}

// Define props for the ServiceCard
interface ServiceCardProps {
  item: ServiceItem;
}

// ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ item }) => {
  const { imgUrl, title, description } = item;

  return (
    <div className="bg-white rounded-lg shadow-md p-5  text-center transition-transform hover:scale-105">
      {/* Service Image */}
      <div className="w-full h-40 scroll-pb-12 relative">
        <Image
          src={imgUrl}
          alt={title}
          width={300}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Title */}
      <h5 className="mt-4 text-xl font-semibold text-gray-900">{title}</h5>

      {/* Description */}
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
