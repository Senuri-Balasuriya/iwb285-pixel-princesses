import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const Navbar = () => {
  const [isSticky,setSticky] = useState(false);
  
  // handle scroll function
  useEffect(() => {
    const handleScroll =() =>{
      const offset = window.scrollY;
      if(offset>0){
        setSticky(true)
      } else{
        setSticky(false)
      }
    };
    window.addEventListener("scroll",handleScroll);
    return () =>{
      window.removeEventListener("scroll",handleScroll); 
    }
  }, [])
  return (
    <header className="container fixed top-0 left-0 right-0 mx-auto transition-all duration-300 ease-in-out max-w-screen-2xl">
      <div className={`navbar xl:px-12 ${isSticky ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out":"bg-green-50"}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="logo ">
              <Link to="/" className="standard-logo">
                <img src="/public/logo.jpg" alt="logo" className="h-24 w-36" />
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-grow hidden ml-auto text-right menu dropdown-content navbar-center lg:flex">
              <ul className="flex justify-end space-x-6 text-lg font-semibold text-green-950">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Recipe">Recipe Finder</Link></li>
                <li><Link to="/Tips">Storage Tips</Link></li>
                <li><Link to="/Aboutus">About Us</Link></li>
                <li><Link to="/Contactus">Contact Us</Link></li>
              </ul>
            </nav>
           
            {/* Support Button */}
            <div className="justify-end header-btn">
              <Link to="/contact" className="px-4 py-2 text-white transition-all duration-300 bg-green-500 rounded-lg header-btn-a hover:bg-green-600">
                Support
              </Link>
            </div>
          

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-bar lg:hidden text-end">
              <button className="mobile-menu-toggle-btn">
                <i className="fal fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
