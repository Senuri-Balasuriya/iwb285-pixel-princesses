import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css"
import { Outlet } from 'react-router-dom'
<<<<<<< Updated upstream
import Footer from '../components/footer'
=======
import Footer from '../components/footer'; 

>>>>>>> Stashed changes


const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    
  )
}

export default Main