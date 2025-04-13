"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current?.classList.add("shadow-lg", "bg-[#1f4e75]");
      } else {
        headerRef.current?.classList.remove("shadow-lg", "bg-[#1f4e75]");
      }
    };

    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header
      ref={headerRef}
      className="bg-[#266895] shadow-md py-2 fixed w-full top-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6 gap-4 pl-72">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-white hover:text-red-500 text-xl font-bold transition duration-300"
            >
              {item.display}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Button className="bg-red-500 hover:bg-red-400 font-bold text-white text-xl cursor-pointer rounded-3xl">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-500 font-bold text-white text-xl cursor-pointer rounded-3xl">
            <Link href="/register">Register</Link>
          </Button>
        </div>

        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className="text-gray-700 font-medium hover:text-red-500 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.display}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <Button className="bg-red-600 hover:bg-red-500 font-bold text-white text-xl cursor-pointer">
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-500 font-bold text-white text-xl cursor-pointer">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
