//random images https://picsum.photos/1200/700
import PageTest from "../PageTest";
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="./public/images/image1200-700.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Random picture</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="./public/images/image2-1200-700.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Random picture</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./public/images/image3-1200-700.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Random picture</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <PageTest />
        
        <Carousel.Caption>
          <h3>I am a React Component</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <PageTest />

        <Carousel.Caption>
          <h3> Another React Component</h3>
          
        </Carousel.Caption>
        </Carousel.Item>
      <Carousel.Item>

      <img
          className="d-block w-100"
          src="./public/images/image4-1200x700.jpg"
          alt="Third slide"
        />
        
        <Carousel.Caption>
          <h3>Forth Random picture</h3>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;