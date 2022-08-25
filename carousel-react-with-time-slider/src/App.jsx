//https://www.youtube.com/watch?v=gtZevjgUkcY

import React from 'react';
import slides from "./slides";
import Carousel from "./components/Carousel";
import PageComponent1 from "./components/PageComponent1";
import PageComponent2 from "./components/PageComponent2";
import PageComponent3 from "./components/PageComponent3";


function App() {
  return (
    <div className="container">     
     <Carousel slides={slides} controls indicators/>
     {/* <PageComponent3/> */}
    </div>
  );
}

export default App;
