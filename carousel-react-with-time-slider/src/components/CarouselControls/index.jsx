import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
console.log()
import "./styles.css";

export default function CarouselControls({prev, next}){
 
    return (
        <div className="buttonControls">
            <button 
                onClick={prev}               
                className="carousel-control left">
                    <FiChevronLeft/>
                </button>
            <button 
                onClick={next}
                className="carousel-control right">
                    <FiChevronRight/>
            </button>
        </div>
    );
}