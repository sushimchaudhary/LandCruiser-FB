"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  PhoneCallIcon,
  MapPin,
} from "lucide-react"; // Importing icons from lucide-react

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#266895] text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

          {/* Logo Section */}
          <div className="text-center md:text-left">
            <Link href="/">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24 rounded-md mx-auto md:mx-0"
              />
            </Link>
            <p className="mt-2 text-sm text-gray-900">
              Your trusted source for Nepali culture.
            </p>
          </div>

          {/* Links and Contact Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">

            {/* Quick Links */}
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

            {/* Contact Us Information */}
            <div>
              <h3 className="font-semibold text-lg">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                {/* Email */}
                <li>
                  <div className="flex items-center space-x-2">
                    <Mail className="text-red-600" size={24} />
                    <Link href="mailto:info@example.com" className="hover:text-gray-400">
                      info@example.com
                    </Link>
                  </div>
                </li>

                {/* Phone Number */}
                <li>
                  <div className="flex items-center space-x-2">
                    <PhoneCallIcon className="text-red-600" size={24} />
                    <Link href="tel:+97798XXXXXXXX" className="hover:text-gray-400">
                      +977 98XXXXXXXX
                    </Link>
                  </div>
                </li>

                {/* Address */}
                <li>
                  <div className="flex items-start space-x-2">
                    <MapPin className="text-red-600" size={24} />
                    <p>
                      Manmaiju, Bagmati Province, Nepal
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-lg">Follow Us</h3>
              <div className="flex space-x-6 mt-2">
                <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                  <Facebook className="w-6 h-6 text-blue-900 hover:text-gray-400 transition-colors" />
                </Link>
                <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-red-600 hover:text-gray-400 transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="w-6 h-6 text-blue-800 hover:text-gray-400 transition-colors" />
                </Link>
                <Link href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="w-6 h-6 text-black hover:text-gray-400 transition-colors" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-900">
          <p>&copy; {new Date().getFullYear()} Land Cruiser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
