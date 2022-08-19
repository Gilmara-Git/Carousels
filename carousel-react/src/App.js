import './App.css';
import imagesArray from "../src/Components/ImagesArray/imagesArray";

function App() {
  return (
    <div>
      {imagesArray.map(item =>
          <img src={item.url}alt="landscape" />
      )}
    </div>
  );
}

export default App;
