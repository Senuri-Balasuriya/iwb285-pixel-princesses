import React from 'react'

function Banner() {
  return (
    <div className= 'section-container bg-gradient-to-r from-[#f3e8ff] from-0% to-[#e9d5ff] to-100%'>
        <div className='flex flex-col items-center justify-between gap-8 py-20 md:flex-row-reverse'>
         {/* image */}
        <div className='md:w-1/2' >
                <img src= "./banner-image.jpg" className='rounded-2xl'/>
                    <div className='flex flex-col items-center justify-around gap-8 -mt-7 md:flex-row'>
                        <div className='flex items-center w-64 gap-3 px-3 py-3 bg-purple-100 shadow-md rounded-2xl'>
                            <img src='./banner-image-1.jpg' alt='' className='w-32 h-auto border-2 border-purple-950 rounded-3xl '/>
                            <div className='space-y-1'>
                            <h5 className='font-medium '>Spicy Noodles</h5>
                            <div className="rating rating-sm">
                            <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly/>
                            <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" defaultChecked readOnly/>
                            <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly />
                            <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly />
                            <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly/>
                            </div>
                            <p className='font-medium text-red'>Rs:1200.00</p>
                            </div>
                        </div>
            
                        <div>
                            <div className='items-center hidden w-64 gap-3 px-3 py-3 bg-purple-100 shadow-md rounded-2xl md:flex'>
                    <img src='./banner-image-1.jpg' alt='' className='w-32 h-auto border-2 border-purple-950 rounded-3xl '/>
                    <div className='space-y-1'>
                        <h5 className='font-medium '>Spicy Noodles</h5>
                        <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly/>
                        <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" defaultChecked readOnly/>
                        <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly/>
                        <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2" readOnly/>
                        <input type="radio" name="rating-2" className="bg-yellow-400 mask mask-star-2"readOnly />
                        </div>
                        <p className='font-medium text-red'>Rs:1200.00</p>
                    </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* text */}
            <div className='px-2 space-y-7 md:w-1/2 md:mr-50' >
            <h2 className='text-4xl font-bold leading-snug md:text-5xl md:leading-snug text-purple-950'>Serving delicious flavors, crafted with passion.<br/> Your taste journey begins here!</h2>
            <p className='text-gray-800 text-xm'>Experience exceptional dining with us. Our menu showcases a variety of dishes made from the freshest ingredients, designed to delight your palate. Whether you're here for a casual meal or a special celebration, our warm atmosphere and attentive service promise a memorable visit. Explore our offerings, make a reservation.</p>
            <button className='px-8 py-3 font-semibold text-white bg-purple-900 rounded-full btn'>Order now</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default Banner