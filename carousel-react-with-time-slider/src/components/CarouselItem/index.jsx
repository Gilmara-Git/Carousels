import "./styles.css";

export default function CarouselItem({slide}){
  
    return(
        <div className="carousel-item">
        <img id="image" src={slide} alt="Northern Lights" />
      </div>
    )
} ; 


