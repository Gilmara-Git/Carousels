import "./styles.css";

export default function CarouselItem({ slide, stopSlide, startSlide }) {
  return (
    <div
      onMouseOut={startSlide}
      onMouseOver={stopSlide}
      className="carousel-item"
    >
      <img id="image" src={slide} alt="Northern Lights" />
    </div>
  );
}
