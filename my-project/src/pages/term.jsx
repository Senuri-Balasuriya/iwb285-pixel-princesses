import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const Term = () => {
  return (
    <div>
      {/* Helmet for managing head metadata */}
<<<<<<< Updated upstream
      <header>
=======
      <div>
      <head>
>>>>>>> Stashed changes
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delicious Journey | Savory Save</title>
        <meta name="keywords" content="Savory_Save" />
        <meta name="description" content="Reduce Food Waste, Save the Planet." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" />
<<<<<<< Updated upstream
      </header>
=======
      </head>
>>>>>>> Stashed changes

      {/* Main Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image 3.jpeg"  
            alt="Salad"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay and Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-8 bg-black bg-opacity-50">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-xl uppercase">Find Your Own Recipe</h2>
            <h1 className="mt-2 text-5xl font-bold">Let's embark on a delicious journey together!</h1>
            <p className="mt-4 text-lg">
              Discover extraordinary flavors, redefine dining, and embrace unforgettable culinary experiences.
            </p>

            {/* Get Started Button */}
            <Link
              to="/Aboutus"
              className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-green-700 bg-white rounded-full hover:bg-green-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section 
        className="relative w-full h-screen bg-green-700"
        style={{
          backgroundImage: `url('/image 14.jpeg')`,  
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col md:flex-row justify-between p-28">
          {/* Left Section */}
          <div className="md:w-1/2 p-11">
            <h1 className="text-4xl font-bold text-black">
              <span className="text-green-50">Savor the Flavors</span> <br />
              A Culinary Journey Awaits
            </h1>
            <p className="mt-4 text-gray-100">
              Explore the rich tapestry of global cuisines, where each dish tells a story, and every bite is a celebration of culture and tradition.
            </p>
            <Link to="/Recipe">
              <button className="px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700">
                Discover Recipes
              </button>
            </Link>
          </div>

          {/* Right Section: Most Popular Recipes */}
          <div className="md:w-1/2 mt-12 md:mt-0 p-8">
            <h2 className="text-2xl font-semibold">Most Popular Recipes</h2>

            {/* Recipe List */}
            <ul className="mt-6 space-y-4">
              {/* Recipe 1 */}
              <li className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/1.jpg" alt="Chicken Curry" className="rounded-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Chicken Curry</h3>
                  <p className="text-gray-500">A classic favorite.</p>
                </div>
              </li>

              {/* Recipe 2 */}
              <li className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/2.jpg" alt="Chocolate Cake" className="rounded-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Chocolate Cake</h3>
                  <p className="text-gray-500">A rich, indulgent dessert.</p>
                </div>
              </li>

              {/* Recipe 3 */}
              <li className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/3.jpg" alt="Pineapple Slate" className="rounded-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Pineapple Slate</h3>
                  <p className="text-gray-500">A tropical delight.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
<<<<<<< Updated upstream
=======
    </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Term;
