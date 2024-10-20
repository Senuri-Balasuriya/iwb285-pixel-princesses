import React from 'react';

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white lg:flex-row">
      {/* Left section: Who We Are and Services Text */}
      <div className="lg:w-1/2">
        <h2 className="mb-4 text-4xl font-bold text-blue-600">Who We Are</h2>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            {/* Replace src with your icon image */}
            <img src="/imafe13.jpg" alt="Services Icon" className="rounded-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-green-600">Our Services</h3>
            <p className="mt-2 text-gray-600">
              We are here to empower you to save wasting foods and find your favourite food recipes with your favourite foods. 
              You can choose your favourite food recipes in a few seconds.
            </p>
          </div>
        </div>
        {/* Learn More Button */}
        <button className="px-6 py-2 mt-6 text-white transition-all duration-300 bg-green-600 rounded-full hover:bg-green-700">
          Learn more
        </button>
      </div>

      {/* Right section: Images */}
      <div className="flex items-center justify-center lg:w-1/2">
        <div className="grid grid-cols-2 gap-4">
          {/* Replace src with your actual image paths */}
          <img src="/image 12.jpg" alt="Fruit Salad" className="object-cover rounded-full shadow-lg" />
          <img src="/food_image_09.jpg" alt="Mango Drink" className="object-cover rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
