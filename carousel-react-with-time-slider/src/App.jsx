import slides from "./slides";
import Carousel from "./components/Carousel";


function App() {
  return (
    <div className="container">     
     <Carousel slides={slides}/>
    </div>
  );
}

export default App;
