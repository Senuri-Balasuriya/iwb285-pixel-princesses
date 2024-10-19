import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">About Savory Save</h2>
            <p className="text-gray-400">
              Whether you're cooking for a family or experimenting in the kitchen, our recipes are designed to be budget-friendly and delicious.
            </p>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/recipe" className="hover:text-gray-300">Recipe Finder</Link></li>
              <li><Link to="/tips" className="hover:text-gray-300">Storage Tips</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <h2 className="text-2xl font-bold mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="ri-instagram-line"></i>
                  <span className="hover:text-gray-300">Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="ri-twitter-line"></i>
                  <span className="hover:text-gray-300">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2">
                  <i className="ri-linkedin-line"></i>
                  <span className="hover:text-gray-300">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center">
          <Link to="/">
            <img src="/footerlogo.jpg" width="150" height="50" alt="Savory Save Logo" />
          </Link>
          <div className="mt-4 lg:mt-0 flex space-x-4">
            <Link to="/privacy" className="hover:text-gray-300">Privacy & Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-gray-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
