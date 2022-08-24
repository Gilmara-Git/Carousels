import { useRef, useState, useEffect } from 'react';
import CarouselItem from "../CarouselItem";
import CarouselControls from "../../components/CarouselControls";
import "./styles.css";

export default function Carousel({ slides }) {
  const [ currSlide, setCurrSlide ] = useState(0);
  const slideInterval  = useRef();

  
  // This function will verify if the index of slides is 0, if true, the useEffect setInterval is 5000
  // function slidesTimer(longer, shorter){
  //   console.log(longer, shorter)

  // }

  // slidesTimer(5000, 3000)
  

function prev(){

  const index = currSlide > 0 ? currSlide - 1 : slides.length - 1;
  setCurrSlide(index);

}

function next(){
  const index =  currSlide === slides.length - 1 ? 0 : currSlide + 1;
  console.log(currSlide)
  setCurrSlide(index);

}

const number = 3000

function startSliderTimer(){
    slideInterval.current =  setInterval(()=>{
    setCurrSlide(currSlide => currSlide < slides.length - 1 ? currSlide + 1 : 0);
  },number);
}

function stopSliderTimer(){
  if(slideInterval.current){
    clearInterval(slideInterval.current);

  }
}

  useEffect(()=>{
    startSliderTimer();

    return ()=> stopSliderTimer();
  },[]);

  return (
    <div className="carousel">
      <CarouselControls prev={prev} next={next} />
      <div 
    
        className="carousel-inner"
        style={{ transform: `translateX(${-currSlide * 100}%)`}}
        >
        {slides.map((slide, index) => (
          <CarouselItem 
              key={index} 
              slide={slide}
              stopSlide={stopSliderTimer}
              startSlide={startSliderTimer}
              />
          ))}
      </div>
     
    </div>
  );
}
