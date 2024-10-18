import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Assuming you're importing external CSS

const Terms = () => {
  return (
    <div>
      {/* Header  components */}
     
      <Navbar />

      {/* Menu Sidebar Section Start */}
      <div className="menu-sidebar-area">
        <div className="menu-sidebar-wrapper">
          <div className="menu-sidebar-close">
            <button className="menu-sidebar-close-btn" id="menu_sidebar_close_btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="menu-sidebar-content">
            <div className="menu-sidebar-logo">
              <Link to="/"><img src="images/logo/nav-logo.png" alt="tourism logo" /></Link>
            </div>
            <div className="mobile-nav-menu"></div>
            <div className="menu-sidebar-single-widget">
              <h5 className="menu-sidebar-title">Contact Info</h5>
              <div className="header-contact-info">
                <span><a href="#"><i className="fa-solid fa-envelope"></i>E-Mail</a></span>
                <span><a href="#"><i className="fa-solid fa-phone"></i>Telephone Number</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Sidebar Section End */}

      <div className="body-overlay"></div>

      {/* Page Header Start */}
      <div className="page-breadcrumb-area page-bg" style={{ backgroundImage: "url('images/terms.jpg')" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-wrapper">
                <div className="page-heading">
                  <h3 className="page-title">Legal Framework</h3>
                </div>
                <div className="breadcrumb-list">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="active"><a href="#">Terms</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Terms Content */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12"></div>
          <div className="col-md-8">
            <div className="about3-title text-start">
              <br /><br />
              <h2 className="mb-80">Terms of Savory Save</h2>
              <p className="mb-80 pb-50">
                Savory Save operates the Savory Save website, which provides the SERVICE. <br className="d-none d-lg-block" />
                This page is used to inform website visitors regarding our policies on the collection, use, and disclosure of Personal Information for users of our Service on the Savory Save website. <br className="d-none d-lg-block" />
                If you choose to use our Service, you agree to the collection and use of information as outlined in this policy. The Personal Information we collect is used to provide and improve the Service. We will not use or share your information with anyone except as described in this Privacy Policy. <br className="d-none d-lg-block" />
                The terms used in this Privacy Policy have the same meanings as defined in our Terms and Conditions, accessible at [Website URL], unless otherwise specified in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information and Footer */}
      <ContactInformation />
      <Footer />

      {/* Scroll Up Section Start */}
      <div id="scrollTop" className="scrollup-wrapper">
        <div className="scrollup-btn">
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </div>
      {/* Scroll Up Section End */}
    </div>
  );
};

export default Terms;