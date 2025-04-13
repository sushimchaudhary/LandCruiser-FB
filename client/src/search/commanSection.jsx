"use client";
import React from "react";

const CommanSection = ({
  title,
  imageUrl = "/lakeside.jpg",
  overlayOpacity = 0.6,
  height = "60vh",
  
  
}) => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('${imageUrl}')`, 
        minHeight: height,
      }}
    >
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative z-10 text-center p-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default CommanSection;
