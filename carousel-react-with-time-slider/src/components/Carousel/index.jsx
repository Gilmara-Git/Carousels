import { useRef, useState, useEffect } from 'react';
import CarouselItem from "../CarouselItem";
import CarouselIndicators from "../CarouselIndicators";
import CarouselControls from "../../components/CarouselControls";
import "./styles.css";

export default function Carousel({ slides, interval = 5000, controls = false, indicators = false, autoPlay = true }) {
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
  if(autoPlay){
    slideInterval.current =  setInterval(()=>{
    setCurrSlide(currSlide => currSlide < slides.length - 1 ? currSlide + 1 : 0);
  },interval);

  }
}

function stopSliderTimer(){
  if(autoPlay && slideInterval.current){
    clearInterval(slideInterval.current);

  }
}

function switchDots(index){
  console.log(index, 'sou o index')
  console.log(currSlide, 'sou o currSlide')
  setCurrSlide(index);
  startSliderTimer();

  // stopSliderTimer()
}

  useEffect(()=>{
    startSliderTimer();

    return ()=> stopSliderTimer();
  },[]);

  return (
    <div className="carousel">
      { controls && <CarouselControls prev={prev} next={next} />}
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

      { indicators && <CarouselIndicators 
        slides={slides} 
        currentIndex={currSlide}
        switchDots={switchDots}
        />}

    </div>
  );
}
