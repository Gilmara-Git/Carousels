import CarouselItem from "../CarouselItem";
import "./styles.css";

export default function Carousel({ slides }) {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <CarouselItem key={index} slide={slide} />
        ))}
      </div>
    </div>
  );
}
