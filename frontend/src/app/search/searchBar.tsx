'use client';

import React, { useRef } from 'react';
import { Search, MapPin, Ruler, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
  const router = useRouter();

  const locationRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const maxGroupSizeRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    const location = locationRef.current?.value?.trim();
    const distance = distanceRef.current?.value;
    const maxGroupSize = maxGroupSizeRef.current?.value;

    if (!location || !distance || !maxGroupSize) {
      return alert('All fields are required');
    }

    if (isNaN(Number(distance)) || isNaN(Number(maxGroupSize))) {
      return alert('Distance and Max Group Size must be numbers');
    }

    const query = `location=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`;
    router.push(`/user/searchresultlist?${query}`);
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <MapPin className="text-red-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Location</h5>
            <input
              type="text"
              ref={locationRef}
              placeholder="All Over Nepal?"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <Ruler className="text-blue-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Distance</h5>
            <input
              type="number"
              ref={distanceRef}
              placeholder="Unlimited (km)"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <Users className="text-green-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Max People</h5>
            <input
              type="number"
              ref={maxGroupSizeRef}
              placeholder="7"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>

          {/* <div className="flex justify-center ml-4">
            <Button
              variant="outline"
              type="button"
              onClick={searchHandler}
              className="text-red-500 hover:text-blue-700 rounded-tr-4xl rounded-bl-4xl px-2 py-2 font-extrabold transition duration-300 cursor-pointer"
            >
              <Search className="mr-2 h-4 w-4 inline" />
            </Button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
