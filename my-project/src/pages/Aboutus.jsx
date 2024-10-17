import React from "react";
import foodImage05 from "../assets/food_image_05.jpg";
import foodImage08 from "../assets/food_image_08.jpg";
import foodImage06 from "../assets/food_image_06.jpg";
import foodImage07 from "../assets/food_image_07.jpg";
import foodImage09 from "../assets/food_image_09.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-area style-1 bg-color py-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 wow fadeInLeft">
            <div className="about-us-content-wrapper-1">
              <div className="section-title">
                <span className="short-title">Who We Are</span>
              </div>
              <div className="info-card style-1">
                <div className="icon-wrapper">
                  <img src={foodImage05} alt="Best recipe solutions" />
                </div>
                <div className="content">
                  <h6 className="title">Our Services</h6>
                  <p className="desc">
                    We empower you to reduce food waste by offering recipes
                    based on what you have. Find your favorite recipes in a few
                    seconds.
                  </p>
                </div>
              </div>
              <div className="meta-wrapper">
                <a href="/" className="theme-btn">Learn more</a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 wow fadeInRight">
            <div className="about-us-image-wrapper-1">
              <img className="bg-shape" src={foodImage08} alt="main meal" />
              <div className="image-wrapper style-1">
                <img src={foodImage06} alt="desserts" />
              </div>
              <div className="image-wrapper style-2">
                <img src={foodImage07} alt="snacks" />
              </div>
              <div className="image-wrapper style-3">
                <img src={foodImage09} alt="drinks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;