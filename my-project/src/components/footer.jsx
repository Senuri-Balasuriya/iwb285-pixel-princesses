import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="hero">
      <div className="container-xl container-lg-fluid container">
        <div className="row justify-content-center gy-5">
          <div className="col-lg-12 col-md-10 col-sm-6 col-11 order-sm-0 order-1">
            <div className="container flex">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div>
                    <h2>About Savory Save</h2>
                    <p>
                      Whether you're cooking for a family or experimenting in the kitchen, our recipes are designed to be budget-friendly and delicious.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div>
                    <h2>Quick Links</h2>
                    <ul className="bottom-list">
                      <li><Link to="/" className="text-color">Home</Link></li>
                      <li><Link to="/recipe" className="text-color">Recipe Finder</Link></li>
                      <li><Link to="/tips" className="text-color">Storage Tips</Link></li>
                      <li><Link to="/contact" className="text-color">Contact Us</Link></li>
                      <li><Link to="/about" className="text-color">About Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <h2>Social Media</h2>
                  <ul className="bottom-list">
                    <li>
                      <a href="#" className="icon1 icon--instagram">
                        <i className="ri-instagram-line"></i>
                      </a>
                      <a href="#" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>Instagram</a><br /><br />
                    </li>
                    <li>
                      <a href="#" className="icon1 icon--twitter">
                        <i className="ri-twitter-line"></i>
                      </a>
                      <a href="#" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>Twitter</a><br /><br />
                    </li>
                    <li>
                      <a href="#" className="icon1 icon--linkedin">
                        <i className="ri-linkedin-line"></i>
                      </a>
                      <a href="#" style={{ textDecoration: 'none', color: 'white', fontSize: '16px' }}>Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="line__separete"></div>
            <div className="by flex">
              <Link to="/">
                <img src="" width="150" height="50" alt="Savory Save Logo" />
              </Link>
              <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center align-items-center">
                <ul className="f-bottom-list d-flex justify-content-start align-items-center">
                  <li className="footer-text">
                    <Link to="/privacy" className="text-color">Privacy & Policy</Link>
                  </li>
                  <li className="privacy">|</li>
                  <li className="footer-text">
                    <Link to="/terms" className="text-color">Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;