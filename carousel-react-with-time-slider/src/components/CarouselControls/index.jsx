import "./styles.css";
export default function CarouselControls({prev, next}){
 
    return (
        <div className="buttonControls">
            <button 
                onClick={prev}               
                className="carousel-control left">Prev</button>
            <button 
                onClick={next}
                className="carousel-control right">Next</button>
        </div>
    );
}