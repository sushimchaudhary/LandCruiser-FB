"use client";

import RegisterForm from "@/components/form/auth/RegisterForm";
import Image from "next/image";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();

  return (
    <div className="bg-black min-h-screen w-full flex justify-center items-center">
      <div className="min-h-[90vh] w-[90%] md:w-[80%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-black">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full relative text-white bg-gradient-to-t from-red-500/90 to-transparent flex items-center justify-center">
          <img
            className="object-cover absolute w-full h-full"
            src="/img18.jpg"
            alt="landcruiser auth background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10"></div>
          <div className="z-20 text-center">
            <h1 className="mb-6 text-4xl font-bold">Cruise Through Experiences</h1>
            <p className="text-lg">Join LandCruiser and explore the journey of a lifetime.</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full bg-gray-300 flex flex-col justify-center px-10 space-y-2 py-10">
          <div className="space-y-2 flex flex-col items-center">
            <Image
              onClick={() => router.push("/landcruiser")}
              className="cursor-pointer"
              src="/logo.png"
              alt="LandCruiser logo"
              width={100}
              height={100}
            />
            <h1 className="text-2xl font-bold text-red-500 text-center">
              Join LandCruiser
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Create your LandCruiser account and start the ride.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
