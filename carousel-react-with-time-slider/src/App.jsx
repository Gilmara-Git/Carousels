//https://www.youtube.com/watch?v=gtZevjgUkcY

import slides from "./slides";
import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="container">     
     <Carousel slides={slides} controls indicators/>
    </div>
  );
}

export default App;
