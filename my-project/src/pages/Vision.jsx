import React from "react";

const Vision = () => {
  return (
    <section className="h-screen px-2 pt-64 bg-cover bsb-cta-1" style={{ backgroundImage: "url('/food_image_19.jpg')" }}>
      <div className="container">
        <div className="pt-10 row pb-50">
          <div className="text-white col-lg-12 col-md-6">
            <h2 className="mb-4 text-6xl font-bold text-center text-green-100 display">Our Vision</h2>
            <p className="p-4 text-3xl">
              We encourage you to reduce food waste, offering solutions to this global problem.
              Our platform guides you to find the best, easy, delicious, and healthy recipes using ingredients from your pantry.
            </p>
            <p>
              Making your cooking easier, you can discover recipes in minutes and customize them as you prefer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;