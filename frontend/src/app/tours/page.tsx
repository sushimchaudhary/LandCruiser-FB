'use client';

import React, {useState, useEffect} from 'react';
import SearchBar from '@/app/search/searchBar';
import TourCard from '@/app/search/TourCard';
import CommanSection from '@/app/search/commanSection';

import NewsLetter from '../search/newsLetter';
import tourList from '../toursdetails/tourData/page';




const Tours: React.FC = () => {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(()=>{
    const pages = Math.ceil(5/4)  // letter we will be use backend data count
    setPageCount(pages);

  }, [page]);

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header Section */}
      <CommanSection className="mt-5" title="All Tours" />

      {/* Search Bar Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <SearchBar />
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tourList?.map((tour) => (
              <div key={tour.id} className="flex flex-col">
                <TourCard tour={tour} className="flex-1" />
              </div>
            ))}
          </div>
        </div>

       {/* Pagination */}
       <div className="flex justify-center items-center mt-10 space-x-3">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={`w-10 h-10 rounded-full border-2 font-semibold ${
                  page === number
                    ? 'bg-red-500 text-white border-red-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-red-100'
                } transition duration-300`}
              >
                {number + 1}
              </button>
            ))}
          </div>
      </section>
      <NewsLetter/>

    </div>
  );
};

export default Tours;
