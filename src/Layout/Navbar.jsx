import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-32" />
              </Link>
            </div>

            {/* Middle: Menu - hidden on mobile */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>

            {/* Right: Donate Button - hidden on mobile */}
            <div className="hidden md:block">
              <Link
                to="/donate"
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button onClick={() => setSidebarOpen(true)}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-green-900 text-white w-64 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-green-800">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <img src={logo} alt="Logo" className="w-16" />
          </Link>
          <button onClick={() => setSidebarOpen(false)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/donate"
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            onClick={() => setSidebarOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
