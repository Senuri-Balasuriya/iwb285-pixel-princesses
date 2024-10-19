import React from 'react';
import { Link } from 'react-router-dom';


const Privacy = () => {
  return (
    <div>
      {/* Helmet for managing head metadata */}
      <header>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Delicious Journey | Savory Save</title>
        <meta name="keywords" content="Savory_Save" />
        <meta name="description" content="Reduce Food Waste, Save the Planet." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" />
      </header>

      {/* Main Section */}
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/image 16.jpeg"  
            alt="Salad"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay and Text Content */}
        <div className="relative z-10 flex flex-col justify-center h-full p-8 bg-black bg-opacity-50">
          <div className="max-w-3xl mx-auto text-center text-white">
            
            <h1 className="mt-2 text-5xl font-bold">Privacy at a Glance</h1>
            

            {/* Get Started Button */}
            <Link
              to="/"
              className="inline-block px-8 py-3 mt-6 text-lg font-semibold text-black bg-white rounded-full hover:bg-black-300"
            >
             Home
            </Link>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
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
      Privacy Policy of Savory Save
      </h1>
      <p className="mt-4 text-gray-50">
      Savory Save operates the Savory Save website, which provides the SERVICE.<br/><br/>

This page is used to inform website visitors of our policies regarding the collection, use, and disclosure of Personal Information for users of our Service on the Savory Save website.<br/><br/>

If you choose to use our Service, you agree to the collection and use of information as outlined in this policy. The Personal Information we collect is used to provide and improve the Service. We will not use or share your information with anyone except as described in this Privacy Policy.<br/><br/>

The terms used in this Privacy Policy carry the same meanings as defined in our Terms and Conditions, accessible at http://savery_save/.com, unless otherwise specified in this Privacy Policy.
       </p>
      <br/><br/>
      <p className="mt-4 text-gray-50">
      </p> 
    </div>
      <div className="md:w-2/5 mt-12 md:mt-0">
     
          <img
              src="/image 18.png"  
              alt="Salad"
              className="object-cover w-full h-full"
            />
      </div>
  </div>
</section>
    </div>
  );
};

export default Privacy;
