import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/">Wellzy</a>
                </div>
                <ul className="flex space-x-4">
                    <li className="navbar-item">
                        <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/chat" className="text-gray-600 hover:text-gray-800">Chat</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/findtherapists" className="text-gray-600 hover:text-gray-800">Find Therapists</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/blog" className="text-gray-600 hover:text-gray-800">Blog</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/signin" className="text-gray-600 hover:text-gray-800">Signin</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/signup" className="text-gray-600 hover:text-gray-800">Signup</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
