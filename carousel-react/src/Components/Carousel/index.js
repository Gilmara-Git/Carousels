// /rfce create compoenents E7
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import { useEffect, useState } from "react";
import imagesArray from "../ImagesArray/imagesArray";
import "./styles.css";


export function Carousel() {
  const [imgIndex, setImgIndex] = useState(0);

  function prevImg() {
    return setImgIndex(imgIndex !== 0 ? imgIndex - 1 : imagesArray.length -1);
  }

  function nextImg() {
    return setImgIndex(imgIndex < imagesArray.length - 1 ? imgIndex + 1 : 0);
  }

  function showActive() {
    const liElements = document.querySelectorAll(".dot");
    for (let element of liElements) {
      const dataId = element.getAttribute("data-id");

      if (Number(dataId) === imgIndex) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }
  showActive();

  useEffect(() => {
    const firstImgId = document.querySelector('[data-id="0"]');
    firstImgId.classList.add("active");
  }, []);

 
  return (
    <div id="carousel">
      <div className="innerCarousel">
        <img id="images" src={imagesArray[imgIndex].url} alt="Landscape" />
      </div>
      <div id="title">{imagesArray[imgIndex].name}</div>

        <button id="prevButton"onClick={prevImg}>
            <FiChevronLeft />
        </button>
        <button id="nextButton" onClick={nextImg}>
            <FiChevronRight/>
        </button>
      <ul id="dots">
        <li onClick={() => setImgIndex(0)} className="dot" data-id="0"></li>
        <li onClick={() => setImgIndex(1)} className="dot" data-id="1"></li>
        <li onClick={() => setImgIndex(2)} className="dot" data-id="2"></li>
        <li onClick={() => setImgIndex(3)} className="dot" data-id="3"></li>
      </ul>
    </div>
  );
}
