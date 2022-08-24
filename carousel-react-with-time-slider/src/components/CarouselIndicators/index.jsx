import "./styles.css";

export default function CarouselIndicators( {slides, currentIndex, switchDots} ){
    return (
       <div className="carousel-indicators">
        {slides.map((_, index)=>(
            <button 
                onClick={()=>switchDots(index)}
                className={`carousel-indicator-item ${currentIndex === index ? "active" : ""}`}></button>
        ))}
       
       </div>
    );
}