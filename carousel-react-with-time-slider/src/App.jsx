import { useState } from "react";
import slides from "./slides";

function App() {
  return (
    <div className="container">
      <div className="carousel">
        <div className="carousel-inner">

          {slides.map((slide, index) => (
            <div className="carousel-item">
              <img src={slide} alt="North Lights" />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
