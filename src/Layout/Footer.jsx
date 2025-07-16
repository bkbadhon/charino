import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Logo + description */}
        <div>
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm">
            Empowering communities and building bright futures through education, support, and compassion.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#donate" className="hover:underline">Donate</a></li>
          </ul>
        </div>

        {/* Right: Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-2">Email: info@example.com</p>
          <p className="text-sm mb-2">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">Facebook</a>
            <a href="#" className="hover:text-yellow-400">Twitter</a>
            <a href="#" className="hover:text-yellow-400">Instagram</a>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 mt-6 py-4 text-center text-sm">
        © {new Date().getFullYear()} Your Organization. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
