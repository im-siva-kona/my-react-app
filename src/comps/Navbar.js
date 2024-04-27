import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 w-full">
            <ul className="flex justify-around">
                <li className="text-white">
                    <a href="/" className="hover:underline">Home</a>
                </li>
                <li className="text-white">
                    <a href="#" className="hover:underline">Login</a>
                </li>
                <li className="text-white">
                    <a href="/services" className="hover:underline">Services</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
