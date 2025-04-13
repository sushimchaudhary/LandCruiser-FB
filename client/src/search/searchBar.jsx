import React, { useRef } from "react";
import { Search, MapPin, Ruler, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  // Refs to access form values
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  // Handler to manage the search functionality
  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    // Validate the inputs
    if (!location || !distance || !maxGroupSize) {
        return alert('All fields are required');
    }

    // Additional checks for number inputs
    if (isNaN(distance) || isNaN(maxGroupSize)) {
        return alert('Distance and Max Group Size must be numbers');
    }

    // If all validations pass, proceed with the search logic
    console.log('Search initiated with:', { location, distance, maxGroupSize });
};

  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-6">
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Location Input */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <MapPin className="text-red-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Location</h5>
            <input
              type="text"
              ref={locationRef}
              placeholder="Where are you going?"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>
        </div>

        {/* Distance Input */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <Ruler className="text-blue-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Distance</h5>
            <input
              type="number"
              ref={distanceRef}
              placeholder="Distance (km)"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>
        </div>

        {/* Max People Input */}
        <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 space-x-3">
          <Users className="text-green-500" size={24} />
          <div>
            <h5 className="text-sm font-semibold text-gray-700">Max People</h5>
            <input
              type="number"
              ref={maxGroupSizeRef}
              placeholder="0"
              className="bg-transparent outline-none w-full text-gray-600"
            />
          </div>
          {/* Search Button */}
          <div className="flex justify-center ml-18">
            <Button
              variant="outline"
              onClick={searchHandler}
              className="text-red-500 hover:text-blue-700 rounded rounded-tr-4xl rounded-bl-4xl  px-2 py-2 font-extrabold transition duration-300 cursor-pointer"
            >
              <Search className="mr-2 h-4 w-4 inline" />
              {/* You can add text here if needed, or leave it icon-only */}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
