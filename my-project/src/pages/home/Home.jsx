import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Preloader from './Preloader'; // Assuming you have a Preloader component
import Footer from './Footer'; // Assuming you have a Footer component
import CTA from './CTA'; // Assuming you have a CTA component
import ContactInformation from './ContactInformation'; // Assuming you have a ContactInformation component

const Home = () => {
    return (
        <div>
            <Preloader />

            {/* Header Section */}
            <Header />

            {/* Slider Section */}
            <section className="slider-area style-2">
                <div className="slider-arrow-btn-wrapper">
                    <button type="button" className="header-slider-arrow-btn prev-btn" id="trigger_header_slider_prev">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button type="button" className="header-slider-arrow-btn next-btn" id="trigger_header_slider_next">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                <div className="slider-wrapper" id="slider-wrapper">
                    {/* Single Slider */}
                    {[1, 2, 3].map((index) => (
                        <div className="single-slider-wrapper" key={index}>
                            <div
                                className="single-slider"
                                style={{ backgroundImage: `url('images/hero-section/${index}.jpg')` }}
                            >
                                <div className="container h-100 align-self-center">
                                    <div className="row h-100">
                                        <div className="col-md-6 align-self-center order-2 order-md-1">
                                            <div className="slider-content-wrapper">
                                                <div className="slider-content">
                                                    <span className="slider-short-title">Find Your Own Recipe</span>
                                                    <h1 className="slider-title text-start">Let's embark on a delicious journey together!</h1>
                                                    <p className="slider-short-desc">
                                                        Discover extraordinary flavors, redefine dining, and embrace unforgettable culinary experiences.
                                                    </p>
                                                    <div className="slider-btn-wrapper">
                                                        <a href="about.php" className="theme-btn style-2">Get started</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Introduction Area */}
            <div className="why-choose-us-area style-1 bg-color">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-4 col-lg-6">
                            <div className="section-title">
                                <div className="sec-content">
                                    <br />
                                    <span className="short-title">Savor the Flavors</span>
                                    <h2 className="title">A Culinary Journey Awaits</h2>
                                </div>
                                <div className="sec-desc">
                                    <p className="desc">Explore the rich tapestry of global cuisines, where each dish tells a story, and every bite is a celebration of culture and tradition.</p>
                                </div>
                                <div className="sec-btn">
                                    <a href="recipe.php" className="theme-btn">Discover Recipes</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 align-self-center">
                            <div className="image-wrapper">
                                <img src="images/hero-section/recipe.jpg" alt="recipe book" />
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="info-wrapper">
                                {/* Popular Recipes */}
                                {[
                                    { title: 'Most Popular Recipe 01', desc: 'Chicken Curry', img: 'images/icon/1.jpg' },
                                    { title: 'Most Popular Recipe 02', desc: 'Chocolate Cake', img: 'images/icon/2.jpg' },
                                    { title: 'Most Popular Recipe 03', desc: 'Pineapple Slate', img: 'images/icon/3.jpg' },
                                ].map((recipe, index) => (
                                    <div className="info-card style-1" key={index}>
                                        <div className="icon-wrapper">
                                            <img src={recipe.img} alt={recipe.desc} />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{recipe.title}</h6>
                                            <p className="desc">{recipe.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location Area */}
            <div className="location-area style-3">
                <div className="container">
                    <div className="section-title justify-content-start text-start pt-100">
                        <div className="sec-content">
                            <span className="short-title">Beyond Freshness</span>
                            <h2 className="title">Discover the Best of Food Storage Tips</h2>
                        </div>
                    </div>
                    <div className="isotope-grid">
                        <div className="row gy-4">
                            {[
                                { title: 'Pantry', img: 'images/ss/1.jpg' },
                                { title: 'Fridge', img: 'images/ss/p2.jpg' },
                                { title: 'Freezer', img: 'images/ss/p3.jpg' },
                            ].map((location, index) => (
                                <div className="col-md-4 masonry-portfolio-item" key={index}>
                                    <div className="location-card style-1">
                                        <div className="image-wrapper">
                                            <a className="image-inner" href="tips.php">
                                                <img src={location.img} alt={location.title} />
                                            </a>
                                        </div>
                                        <div className="content-wrapper">
                                            <div className="content-inner">
                                                <h3 className="content-title"><a href="tips.php">{location.title}</a></h3>
                                                <a href="tips.php" className="icon"><i className="icon-up-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Area */}
            <div className="about-us-area style-3">
                <div className="banner-shape">
                    <img className="bg-shape" src="images/shape/banner-shape-2.png" alt="foods" />
                    <img className="bg-img about-v-m-sec-bg-img" src="images/ss/who-we.png" alt="who we are" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-6 pt-30 pb-30 d-flex align-items-center">
                            <div className="about-us-wrapper" style={{ width: '100%' }}>
                                <div className="about-us-content-wrapper-2">
                                    <div className="section-title">
                                        <div className="sec-content">
                                            <br /><br />
                                            <h2 className="title">Who We Are</h2><br />
                                            <div className="sec-desc">
                                                <p className="desc">Savory Save is dedicated to enriching your culinary experience. We provide valuable tips on food storage, a diverse collection of recipes, and expert culinary guides.</p>
                                            </div><br /><br />
                                            <h2 className="title">Our Services</h2>
                                            <div className="sec-desc">
                                                <ul>
                                                    <li><b>Food Storage Tips:</b> Maximize freshness and minimize waste.</li><br />
                                                    <li><b>Recipe Collections:</b> Discover new flavors and dishes.</li><br />
                                                    <li><b>Culinary Guides:</b> Navigate the art of cooking with ease.</li><br /><br />
                                                </ul>
                                            </div>
                                            <div className="slider-btn-wrapper">
                                                <a href="terms.php" className="theme-btn">Discover More</a>
                                                <br /><br /><br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <CTA />

            {/* Contact Information Section */}
            <ContactInformation />

            {/* Footer Section */}
            <Footer />

            {/* Scroll Up Button */}
            <div id="scrollTop" className="scrollup-wrapper">
                <div className="scrollup-btn">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            </div>
        </div>
    );
};

export default Home;
