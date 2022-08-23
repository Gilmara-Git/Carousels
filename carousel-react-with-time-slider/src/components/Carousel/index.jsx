import { useState, useEffect } from 'react';
import CarouselItem from "../CarouselItem";
import CarouselControls from "../../components/CarouselControls";
import "./styles.css";

export default function Carousel({ slides }) {
  const [ currSlide, setCurrSlide ] = useState(0);

  
  // This function will verify if the index of slides is 0, if true, the useEffect setInterval is 5000
  // function slidesTimer(longer, shorter){
  //   console.log(longer, shorter)

  // }

  // slidesTimer(5000, 3000)
  
  useEffect(()=>{
    const slideInterval =  setInterval(()=>{
      setCurrSlide(currSlide => currSlide < slides.length - 1 ? currSlide + 1 : 0);
    },3000);

    return ()=> clearInterval(slideInterval);
  },[]);

  return (
    <div className="carousel">
      <div 
    
        className="carousel-inner"
        style={{ transform: `translateX(${-currSlide * 100}%)`}}
        >
        {slides.map((slide, index) => (
          <CarouselItem key={index} slide={slide} />
          ))}
      </div>
          <CarouselControls />
     
    </div>
  );
}
