"use client";

import LoginForm from "@/components/form/auth/LoginForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [msg, setMsg] = useState("");

  return (
    <div className="bg-black min-h-screen w-full flex justify-center items-center">
      <div className="min-h-[90vh] w-[90%] md:w-[80%] flex flex-col md:flex-row rounded-lg overflow-hidden shadow-black">
        {/* Left Image Section */}
        <div className="md:w-1/2 w-full relative text-white bg-gradient-to-t from-blue-900/70 to-transparent flex items-center justify-center">
          <img
            className="object-cover absolute w-full h-full"
            src="/img3.jpg"
            alt="auth photo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
          <div className="z-20 text-center px-10 text-2xl 2xl:text-4xl font-semibold italic">
            <p>"Where Your Next Adventure Begins!"</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2 w-full bg-gray-300 flex flex-col justify-center px-10 py-10 space-y-4">
          <div className="space-y-2 flex flex-col items-center">
            <Image
              onClick={() => router.push("/")}
              className="cursor-pointer"
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
            <h1 className="text-2xl font-bold text-red-600 text-center">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              Login to your LandCruiser account.
            </p>
          </div>

          {msg && <p className="text-center text-sm text-red-500">{msg}</p>}

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
