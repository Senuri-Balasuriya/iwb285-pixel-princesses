import React, {useEffect, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../../components/Cards';




const Specialdishes = () => {

    const [recipes, setRecipes] = useState([]);
    const slider = React.useRef(null)

    useEffect(() => {
            fetch("/menu.json")
            .then(res => res.json())
            .then(data => {
                const specials = data.filter((item) => item.category === "popular")
                //console.log(specials)
                setRecipes(specials)
            })
    }, [])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='my-20 section-containeer '>
        <div className='mx-12 text-left'>
           <p className='subtitle'> Special Dishes</p>
           <h2 className='title md:w-[520px]'>Standout Dishes From Our Menu</h2>
         </div>

         <Slider {...settings}>
        {
          recipes.map((item, i) =>(
            <Cards key={i} item = {item}/>
          ))
        }
      </Slider>
    </div>
  )
}

export default Specialdishes