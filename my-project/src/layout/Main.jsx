import React from 'react'
import Navbar from '../components/Navbar'
import "../App.css"
import Banner from '../components/Banner'
import { Outlet } from 'react-router-dom'



const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
    
  )
}

export default Main