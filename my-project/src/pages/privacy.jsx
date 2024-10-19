import React from "react";
import { Link } from "react-router-dom";



const Aboutus = () => {
  return (
    <div className="py-10 Aboutus-area style-1 bg-color">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 wow fadeInLeft">
            <div className="Aboutus-content-wrapper-1">
              <div className="section-title">
                <span className="short-title">Who We Are</span>
              </div>
              <div className="info-card style-1">
                <div className="icon-wrapper">
                <Link>  <img src="/food_image_05.jpg" alt="Best recipe solutions" /></Link>
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
            <div className="Aboutus-image-wrapper-1">
              <img className="bg-shape" src="/food_image_08.jpg" alt="main meal" />
              <div className="image-wrapper style-1">
                <img src="/food_image_06.jpg" alt="desserts" />
              </div>
              <div className="image-wrapper style-2">
                <img src="/food_image_07.jpg" alt="snacks" />
              </div>
              <div className="image-wrapper style-3">
                <img src="/food_image_09.jpg" alt="drinks" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;