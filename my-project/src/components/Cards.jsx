import React, {useState} from 'react'
import {FaHandHolding, FaHeart} from "react-icons/fa"

const Cards = ({item}) => {
  const [isHeartFillted, setIsHeartFillted] = useState(false);
  
  const handleHeartClick = () => {
    setIsHeartFillted(!isHeartFillted)
  }



  
  return (
    <div >
        <div className="relative shadow-xl w-84 h-84 card bg-base-100">
    <div className={`absolute gap-1 p-4 bg-purple-900 rating right-2 top-2 heartStar ${isHeartFillted ? "text-rose-500" : "text-white"}`}
    onClick={handleHeartClick}
    >
       <FaHeart className='w-5 h-5 cursor-pointer'/>
      
    </div>      
  <figure>
    <img
      src={item.image}
      alt="" 
      className='duration-200 tr64ansition-all hover:scale-105 md:h-64 '/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>Description for the item</p>
    <div className="items-center justify-between card-actions">
        <h5 className='font-semibold'> <span className='text-sm text-red-800'></span> {item.price}</h5>
      <button className="text-white bg-purple-900 btn">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards