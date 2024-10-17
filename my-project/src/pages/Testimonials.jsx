import React from "react";

const testimonials = [
  {
    name: "Priyantha Kumuduni",
    feedback: "Very useful. It helps to find food recipes easily. They are very healthy and easy to make.",
  },
  {
    name: "Nimal Kumara",
    feedback: "This is a great solution for food waste reduction.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="testimonial-slider-area style-2 pt-50 pb-50">
      <div className="container">
        <div className="section-title">
          <span className="short-title">Testimonial</span>
          <h2 className="title">What users say</h2>
        </div>
        <div className="testimonial-marquee-wrapper style-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-two">
              <div className="user-meta-info">
                <h5 className="user-name">{testimonial.name}</h5>
                <p className="desc">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;