"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You! 🎉</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your Land Cruiser Adventure is Booked! Get ready to explore <br/>
        new horizons and make unforgettable memories. The adventure <br/>
         starts soon! 🌍✨
      </p>

      <Button
        onClick={() => router.push("/")}
        className="bg-red-600 hover:bg-red-500 cursor-pointer"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ThankYouPage;
