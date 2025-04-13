"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github, Mail, MapIcon, PhoneCallIcon, LocateIcon, MapPin } from "lucide-react"; // Added Mail icon

const Footer = () => {


  return (
    <footer className="bg-[#266895]  text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="w-24 h-24 rounded-md mx-auto md:mx-0" />
            </Link>
            <p className="mt-2 text-sm text-gray-900">
              Your trusted source for Nepali culture.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/home" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/tours" className="hover:text-gray-400">
                    Tours
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Part */}
            <div>
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <div className="flex items-center space-x-2">
                    <Mail className="text-red-600" size={24}/>
                    <Link href="mailto:info@example.com" className="hover:text-gray-400">
                      info@example.com
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    {/* You might want to use a phone icon here */}
                    <PhoneCallIcon className="text-red-600" size={24}/>
                    <Link href="tel:+97798XXXXXXXX" className="hover:text-gray-400">
                      +977 98XXXXXXXX
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-start space-x-2">
                    {/* You might want to use a map marker icon here */}
                    <MapPin className="text-red-600" size={24} />
                    <p >
                      Manmaiju, Bagmati Province, Nepal
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-6 mt-2">
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook className="w-6 h-6  text-blue-900 hover:text-gray-400 transition-colors" />
                </Link>
               
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram className="w-6 h-6  text-red-600 hover:text-gray-400 transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="w-6 h-6  text-blue-800 hover:text-gray-400 transition-colors" />
                </Link>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="w-6 h-6  text-black hover:text-gray-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-900">
          <p>&copy; {new Date().getFullYear()} Land Cruiser.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;