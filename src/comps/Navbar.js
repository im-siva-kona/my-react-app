import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-300 shadow-lg mb-8">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeBO5u5btWOQpmfTdZfHiQNgzDfD28kkP9rrF8LpslR2xRrEf2rXqcAimZXZeIoXG_Jw&usqp=CAU"
            alt="Logo"
            className="h-8 lg:h-10"
          />
          <span className="text-xl lg:text-2xl font-bold text-white">Dream Homes</span>
        </a>
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-white hover:text-gray-200 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#new-listings" className="text-white hover:text-gray-200 transition duration-300">New Listings</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
