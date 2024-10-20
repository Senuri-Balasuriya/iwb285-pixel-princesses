import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-black">
      <div className="container px-6 mx-auto lg:px-20">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold">About Savory Save</h2>
            <p className="text-gray-400">
              Whether you're cooking for a family or experimenting in the kitchen, our recipes are designed to be budget-friendly and delicious.
            </p>
          </div>
          <div className="lg:w-1/4">
            <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/recipe" className="hover:text-gray-300">Recipe Finder</Link></li>
              <li><Link to="/tips" className="hover:text-gray-300">Storage Tips</Link></li>
              <li><Link to="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <h2 className="mb-4 text-2xl font-bold">Social Media</h2>
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
        <div className="flex flex-col items-center justify-between pt-4 mt-8 border-t border-gray-700 lg:flex-row">
          <Link to="/">
            <img src="/footerlogo.jpg" width="150" height="50" alt="Savory Save Logo" />
          </Link>
          <div className="flex mt-4 space-x-4 lg:mt-0">
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
