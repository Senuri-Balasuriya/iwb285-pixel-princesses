import React from 'react';

const Home = () => {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delicious Journey | Savory Save</title>
        <meta name="keywords" content="Savory_Save" />
        <meta name="description" content="Reduce Food Waste, Save the Planet." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" />
      </head>

      <body>
        
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
              <a href="/Aboutus"
                className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-green-700 bg-white rounded-full hover:bg-green-100"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        

{/* 2ND Section */}

<section 
  className="relative w-full h-screen bg-green-700"
  style={{
    backgroundImage: `url('/image 14.jpeg')`,  
    backgroundSize: 'fill',
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
      <p className="mt-4 text-gray-100 ">
        Explore the rich tapestry of global cuisines, where each dish tells a story, and every bite is a celebration of culture and tradition.
      </p>
      <a href="/Recipe"> <button className="px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700">
        Discover Recipes
      </button></a>
      
    </div>

    {/* Right Section: Most Popular Recipes */}
    <div className="md:w-1/2 mt-12 md:mt-0 p-8">
      <h2 className="text-2xl font-semibold">Most Popular Recipes</h2>

      {/* Recipe List */}
      <ul className="mt-6 space-y-4">
        {/* Recipe 1 */}
        <li className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span><img src="/1.jpg" alt="Chicken Curry" /></span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Chicken Curry</h3>
            <p className="text-gray-500">A classic favorite.</p>
          </div>
        </li>

        {/* Recipe 2 */}
        <li className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span><img src="/2.jpg" alt="Chocolate Cake" /></span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Chocolate Cake</h3>
            <p className="text-gray-500">A rich, indulgent dessert.</p>
          </div>
        </li>

        {/* Recipe 3 */}
        <li className="flex items-center p-4 bg-white rounded-lg shadow">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span><img src="/3.jpg" alt="Pineapple Slate" /></span>
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
{/* 3ND Section */}
<section className="container mx-auto px-4 py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-black-300 text-xl font-bold">Beyond Freshness</h2>
        <h1 className="text-4xl font-bold">Discover the Best of Food Storage Tips</h1>
        <a href="/term">
      <button className="px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700">
        Follow Store Tips
      </button>
      </a>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="w-full">
          <img 
            src="/image 9.jpeg" 
            alt="Pantry Organization" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="w-full">
          <img 
            src="/image 10.jpeg" 
            alt="Fridge Storage" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="w-full">
          <img 
            src="/image 11.jpeg" 
            alt="Freezer Organization" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    {/* 4ND Section */}

<section 
  className="relative w-full h-screen p-32 "
  style={{
    backgroundImage: `url('/image 13.jpeg')`,  
    backgroundSize: 'fill',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
  }}
>
  <div className="flex flex-col md:flex-row justify-between">
    {/* Left Section */}
    <div className="md:w-3/5 p-12">
      <h1 className="text-4xl font-bold text-green-50">
      Who We Are
      </h1>
      <p className="mt-4 text-gray-50">
      Savory Save is dedicated to enriching your culinary experience. We provide valuable tips on food storage, a diverse collection of recipes, and expert culinary guides. </p>
      <br/><br/>
      <h1 className="text-4xl font-bold text-green-50">
      Our Services
      </h1>
      <p className="mt-4 text-gray-50">
        <ul>
          <li><b>Food Storage Tips:</b> Maximize freshness and minimize waste.</li>
          <li><b>Recipe Collections:</b> Discover new flavors and dishes.</li>
          <li><b>Culinary Guide:</b> Navigate the art of cooking with ease.</li>
        </ul>
       
      </p>
      <br/><br/>
      <a href="/term">
      <button className="px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700">
        Discover Recipes
      </button>
      </a>
      
    </div>

    
      <div className="md:w-2/5 mt-12 md:mt-0">
     
          <img
              src="/image 12.jpeg"  
              alt="Salad"
              className="object-cover w-full h-full"
            />
      </div>

      
    
  </div>
</section>

     {/* 5th Section */}
     <section className="relative w-full h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/image 4.jpeg"  
              alt="Salad"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Overlay and Text Content */}
          <div className="relative z-10 flex flex-col justify-center h-full p-8 bg-black bg-opacity-50">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-xl uppercase">START YOUR JOURNEY</h2>
              <h1 className="mt-2 text-5xl font-bold">Ensure your data's safety with Savory Save. Review our Privacy Policy today.</h1>
          

              {/* Get Started Button */}
              <a href="/privacy"
                className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-green-700 bg-white rounded-full hover:bg-green-100">
                Your Data, Our Priority
              </a>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
};

export default Home;
