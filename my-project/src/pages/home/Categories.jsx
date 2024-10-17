import React from 'react'

const categoriesItems =[
    {id:1, title:"Main Dish",des:"(86 Dishes)", image:"./Main-dish.webp" },
    {id:2, title:"Breakfast",des:"(12 Breakfast)", image:"./Break-fast.jpg" },
    {id:3, title:"Dessert",des:"(140 Dessert)", image:"./Dessert.jpeg" },
    {id:4, title:"Browse All",des:"(255 Browse All)", image:"./All.jpg" },
   ]
   
   const Categories=() => {
     return (
       <div className='py-16 section-container'>
         <div className='text-center'>
           <p className='subtitle'> Customer Favorites</p>
           <h2 className='title'>Popular Category</h2>
         </div>
         {/* Category cart */}
         <div className='flex flex-col flex-wrap items-center justify-around gap-8 mt-12 sm:flex-row'>
           {
             categoriesItems.map((items, i)=>(
               <div key={i} className='px-5 py-6 mx-auto text-center transition-all duration-300 rounded-md shadow-lg cursor-pointer bg-purple-50 w-72 hover:-translate-y-4'>
                 <div className='flex items-center justify-center w-full mx:auto'>
                   <img src={items.image} alt="" className='w-32 h-32 bg-black rounded-badge'/>
                 </div>
                 <div className='mt-5 space-y-1 font-semibold'>
                   <h5>{items.title}</h5>
                   <p>{items.des}</p>
                 </div>
               </div>
             ))
           }
         </div>
       </div>
     )
   }
   
   export default Categories