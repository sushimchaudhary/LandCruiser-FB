import React from 'react';
import Image from 'next/image';




const galleryImages = [
  { id: 1, src: '/img1.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: '/img2.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: '/img3.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: '/img4.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: '/img5.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: '/img7.jpg', alt: 'Gallery Image 6' },
  { id: 7, src: '/img9.jpg', alt: 'Gallery Image 7' },
  { id: 8, src: '/img11.jpg', alt: 'Gallery Image 8' },
  { id: 9, src: '/img12.jpg', alt: 'Gallery Image 7' },
  { id: 10, src: '/img15.jpg', alt: 'Gallery Image 8' },
];

const GallerySection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Gallery</h2>
        
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="w-full overflow-hidden rounded-md shadow-md break-inside-avoid">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
