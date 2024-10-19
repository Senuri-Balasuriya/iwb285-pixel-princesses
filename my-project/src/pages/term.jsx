// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed if you're using links

const Home = () => {
  return (
    <div className="py-10 home-area bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-4 wow fadeInLeft">
            <div className="content-wrapper bg-white p-6 rounded shadow-lg">
              <div className="section-title mb-4">
                <span className="text-lg font-bold">Welcome to Our Kitchen</span>
              </div>
              <div className="info-card bg-gray-50 p-4 rounded">
                <div className="icon-wrapper mb-4">
                  <Link to="#">
                    <img src="/path/to/logo.png" alt="Best recipe solutions" className="w-24 h-24" />
                  </Link>
                </div>
                <div className="content">
                  <h6 className="text-xl font-semibold">What We Offer</h6>
                  <p className="text-gray-700">
                    Discover delicious recipes based on your ingredients. Reduce food waste and cook with ease.
                  </p>
                </div>
              </div>
              <div className="meta-wrapper mt-4">
                <Link to="/learn-more" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Learn More</Link>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 p-4 wow fadeInRight">
            <div className="image-wrapper relative bg-gray-200 rounded">
              <img src="/food_image_08.jpg" alt="main meal" className="w-full h-64 object-cover rounded-t" />
              <div className="flex flex-col absolute top-0 right-0 space-y-2 p-2">
                <img src="/food_image_06.jpg" alt="desserts" className="w-32 h-32 object-cover rounded" />
                <img src="/food_image_07.jpg" alt="snacks" className="w-32 h-32 object-cover rounded" />
                <img src="/food_image_09.jpg" alt="drinks" className="w-32 h-32 object-cover rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
