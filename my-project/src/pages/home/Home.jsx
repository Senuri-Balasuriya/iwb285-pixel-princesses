import React from 'react';
import Url from './components/Url'; // Include component imports for your sections
import Style from './components/Style'; // Tailwind global styles can be managed in index.css
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Cta from './components/Cta';
import ContactInformation from './components/ContactInformation';
import Script from './components/Script'; // Optional if you need it for extra JS scripts

const Home = () => {
  return (
    <div lang="en" className="no-js">
      <Url /> {/* Placeholder for any URL related component logic */}

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Savory Save</title>

        {/* Meta tags */}
        <meta name="keywords" content="food waste, sustainability, waste reduction..." />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SavorySave Team" />
        <meta name="rights" content="© 2024 SavorySave" />
        <meta name="description" content="SavorySave - Innovative Food Waste Solutions for a Sustainable Future." />
        <meta name="rating" content="General" />
        <meta property="og:image" content="URL_of_your_image_here" />
        <meta property="og:site_name" content="SavorySave" />
        <meta property="og:url" content="http://localhost/savery_save/" />
        <meta property="og:type" content="Website" />
        <meta property="og:description" content="SavorySave offers innovative food waste solutions..." />
        <meta property="og:title" content="SavorySave - Food Waste Solutions for a Sustainable Future" />

        <link rel="icon" type="image/png" href="images/ss/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fasthand&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />

        <Style /> {/* Optional import if needed for additional global styles */}
      </head>

      <body>
        {/* Preloader */}
        <Preloader />

        {/* Header */}
        <Header />

        {/* Slider Section */}
        <section>
          <div className="slider-area style-2">
            <div className="slider-arrow-btn-wrapper">
              <button type="button" className="header-slider-arrow-btn prev-btn">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button type="button" className="header-slider-arrow-btn next-btn">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="slider-wrapper" id="slider-wrapper">
              {/* First Slider */}
              <div className="single-slider-wrapper">
                <div
                  className="single-slider bg-cover"
                  style={{ backgroundImage: "url('images/hero-section/1.jpg')" }}
                >
                  <div className="container h-full flex justify-center">
                    <div className="col-md-6">
                      <div className="slider-content-wrapper">
                        <div className="slider-content text-start">
                          <span className="slider-short-title">Find Your Own Recipe</span>
                          <h1 className="slider-title">Let's embark on a delicious journey together!</h1>
                          <p className="slider-short-desc">
                            Discover extraordinary flavors, redefine dining, and embrace unforgettable culinary
                            experiences.
                          </p>
                          <div className="slider-btn-wrapper">
                            <a href="/about" className="theme-btn style-2">
                              Get started
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Repeat slider with dynamic content */}
            </div>
          </div>
        </section>

        {/* Introduction Area */}
        <section className="bg-gray-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="section-title">
                  <span className="short-title">Savor the Flavors</span>
                  <h2 className="title">A Culinary Journey Awaits</h2>
                  <p className="desc">
                    Explore the rich tapestry of global cuisines, where each dish tells a story.
                  </p>
                  <a href="/recipe" className="theme-btn">
                    Discover Recipes
                  </a>
                </div>
              </div>
              <div className="col-xl-4">
                <img src="images/hero-section/recipe.jpg" alt="recipe book" className="rounded-lg shadow-md" />
              </div>
              <div className="col-xl-4">
                {/* Popular Recipe Cards */}
                <div className="info-card">
                  <h6>Most Popular Recipe 01</h6>
                  <p>Chicken Curry</p>
                </div>
                <div className="info-card">
                  <h6>Most Popular Recipe 02</h6>
                  <p>Chocolate Cake</p>
                </div>
                <div className="info-card">
                  <h6>Most Popular Recipe 03</h6>
                  <p>Pineapple Slate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Sections like Location, Who We Are, etc. */}

        {/* Contact Information */}
        <Cta />
        <ContactInformation />

        {/* Footer */}
        <Footer />

        {/* Scroll Up Button */}
        <div id="scrollTop" className="scrollup-wrapper">
          <div className="scrollup-btn">
            <i className="fa-solid fa-arrow-up"></i>
          </div>
        </div>

        <Script /> {/* Optional for additional scripts */}
      </body>
    </div>
  );
};

export default Home;