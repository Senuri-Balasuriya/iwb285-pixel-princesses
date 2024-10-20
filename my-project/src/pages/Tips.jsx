import React, { useState } from 'react';

// This is a functional component for the Food Storage Tips page.
const Tips = () => {
  const [foodItem, setFoodItem] = useState({
    name: '',
    quantity: '',
    location: 'Pantry',
    expiration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodItem({ ...foodItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:8080/food', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foodItem),
    });

    if (response.ok) {
      alert('Food item added successfully!');
      setFoodItem({ name: '', quantity: '', location: 'Pantry', expiration: '' }); // Reset form
    } else {
      alert('Failed to add food item.');
    }
  };

  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Food Storage Tips | Savory Save</title>
        <meta name="keywords" content="Savory_Save" />
        <meta name="description" content="Reduce Food Waste, Save the Planet." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" />
      </head>

      <body>
      <div className="w-full h-screen opacity-100 pt-36 " style={{
        backgroundImage: `url('/recipe7.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}>
        <div className="pt-12">
          <h1 className="text-6xl font-bold text-center text-green-50">Welcome to Your Food Storage Management!</h1>
          <p className="pt-3 text-2xl text-center text-green-200">Discover meals and snacks tailored to your taste by applying filters based on your preferences.</p>
        </div>
        

        <div className="flex flex-col items-center justify-between pt-4 md:flex-row">
        

          {/* Form Section */}
          
          <div className="w-full max-w-md p-4 mt-6 bg-green-200 border rounded-lg shadow-lg md:w-1/2 md:mt-0">
            <h2 className="mb-6 text-2xl font-semibold text-center">Add Food Item</h2>

            <form id="foodForm" onSubmit={handleSubmit}>
              {/* Food Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Food Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={foodItem.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={foodItem.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Storage Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700">Storage Location</label>
                <select
                  name="location"
                  id="location"
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={foodItem.location}
                  onChange={handleChange}
                >
                  <option value="Pantry">Pantry</option>
                  <option value="Fridge">Fridge</option>
                  <option value="Freezer">Freezer</option>
                </select>
              </div>

              {/* Expiration Date */}
              <div className="mb-4">
                <label htmlFor="expiration" className="block text-gray-700">Expiration Date</label>
                <input
                  type="date"
                  name="expiration"
                  id="expiration"
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={foodItem.expiration}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button type="submit" className="w-full py-2 text-white transition duration-300 bg-green-500 rounded-md hover:bg-green-600">
                  Add Food Item
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
        
      </body>
    </div>
  );
};

export default Tips;
