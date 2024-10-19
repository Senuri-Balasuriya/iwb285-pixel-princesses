import React from 'react';

// This is a functional component for the Recipe Finder page.
const Recipe = () => {
  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Recipe Finder | Savory Save</title>
        <meta name="keywords" content="Savory_Save" />
        <meta name="description" content="Reduce Food Waste, Save the Planet." />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" />
      </head>
      
      <main>
      
        <div className="w-full h-screen opacity-100 pt-36 " style={{
        backgroundImage: `url('/recipe4.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
          }}>
          <h1 className="text-6xl font-bold text-center text-green-50">Recipe Finder</h1>
          <p className="pt-3 text-2xl text-center text-green-300">Discover meals and snacks tailored to your taste by applying filters based on your preferences.</p>
        
        
        <div className="p-8 rounded-lg">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Text Section */}
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-4xl font-bold text-green-100">
                Your Ingredients, Our Recipes: Let’s Get Cooking!
              </h2>
              <p className="mt-4 text-lg text-green-200">
                Welcome to the Recipe Finder! Here, culinary creativity meets convenience. Simply enter the ingredients you have on hand, and let us help you discover a world of delicious possibilities. Whether you're looking to make a quick meal with leftovers or experiment with new flavors, our smart recipe suggestions will inspire you to whip up something fantastic in no time. Say goodbye to food waste and hello to tasty meals. let’s get cooking!
              </p>
            </div>
            
            {/* Image Section */}
            <div className="h-auto mt-6 md:w-1/2 md:mt-0 ">
              <img src="" alt="Delicious Food" className="rounded-full" />
            </div>
          </div>
        </div>
        </div>
       
        

        <div className="flex justify-center py-6 bg-green-600">
          <div className="relative">
            <input type="text" className="px-1 py-2 pr-12 border-2 rounded-lg shadow-sm w-96" placeholder="Search for recipes by ingredients" />
            <button className="absolute p-1 -translate-y-1 right-4 top-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        

        <div className="p-16 bg-green-100 rounded-lg">
          <form className="grid grid-cols-4 gap-2">
            {/* Meal Section */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Meal</h3>
              {['Breakfast', 'Lunch', 'Dinner', 'Snack/Side', 'Dessert'].map(meal => (
                <label key={meal} className="flex mb-1 item-center">
                  <input type="checkbox" className="mr-2 border-2 border-green-500 focus:ring-green-500" value={meal.toLowerCase()} />
                  {meal}
                </label>
              ))}
            </div>

            {/* Special Diet Section */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Special Diet</h3>
              {['Vegetarian', 'Egg-free', 'Soy-free', 'Nut-free', 'Diabetes-friendly', 'Dairy-free', 'Gluten-free'].map(diet => (
                <label key={diet} className="flex mb-1 item-center">
                  <input type="checkbox" className="mr-2 border-2 border-green-500 focus:ring-green-500" value={diet.toLowerCase()} />
                  {diet}
                </label>
              ))}
            </div>

            {/* Recipe Type Section */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Recipe Type</h3>
              {['Kid-friendly', 'Crowd-friendly', 'No Cook', 'Freezer-friendly'].map(type => (
                <label key={type} className="flex mb-1 item-center">
                  <input type="checkbox" className="mr-2 border-2 border-green-500 focus:ring-green-500" value={type.toLowerCase()} />
                  {type}
                </label>
              ))}
            </div>

            {/* Time Section */}
            <div>
              <h3 className="mb-2 text-lg font-semibold">Time</h3>
              {['45-Minute Meals', '15-Minutes or less Meals', '30-Minute Meals'].map(time => (
                <label key={time} className="flex mb-1 item-center">
                  <input type="checkbox" className="mr-2 border-2 border-green-500 focus:ring-green-500" value={time.toLowerCase()} />
                  {time}
                </label>
              ))}
            </div>
          </form>
        </div>

        <div>
          <h1 className="text-4xl font-bold">Recipes</h1>
        </div>
      </main>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Recipe;
