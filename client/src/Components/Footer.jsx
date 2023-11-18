import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-4">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 mb-4">
          {/* Use react-icons for better integration */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          {/* Add more social icons as needed */}
        </div>

        {/* Email */}
        <p className="mb-4">
          <a href="mailto:your@email.com" className="font-bold italic">
            solarpowerwall@gmail.com
          </a>
        </p>

        {/* Important Links */}
        <div className="flex space-x-4">
          <Link to="/energy" className="hover:underline">
            Energy
          </Link>
          <Link to="/hardware" className="hover:underline">
            Hardware
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>

        {/* Copyright */}
        <p className="mt-4">
          &copy; 2023 Solar Powerwall Consumption. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
