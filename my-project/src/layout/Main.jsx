import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css"
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'


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