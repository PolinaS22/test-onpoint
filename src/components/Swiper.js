import React, { useState } from "react";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import homeBtn from "./images/global.png";
import footerImg from "./images/onpoint.png";

export const Swiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1 key="1" isActive={currentSlide === 0} onNext={() => handleNextSlide()} />,
    <Slide2 key="2" isActive={currentSlide === 1} />,
    <Slide3 key="3" />,
  ];
  const goToFirstSlide = () => {
    setCurrentSlide(0); 
  };
  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handleSwipe = (e) => {
    const startTouch = e.touches[0].clientX;
    let endTouch;
    const onEndTouch = (e) => {
      endTouch = e.changedTouches[0].clientX;
      if (startTouch - endTouch > 50) {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1)); 
      } else if (endTouch - startTouch > 50) {
        setCurrentSlide((prev) => Math.max(prev - 1, 0)); 
      }
      document.removeEventListener("touchend", onEndTouch);
    };
    document.addEventListener("touchend", onEndTouch);
  };

  return (
    <div
    id="swiper-container"
    className="swiper-container"
    onTouchStart={handleSwipe}
    >
      <button className="home-button" onClick={goToFirstSlide}>
        <img src={homeBtn} alt="Home" />
      </button>
      <div
        className="swiper-wrapper"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`, 
          transition: "transform 0.5s ease",
        }}
      >
        {slides}
      </div>
      <div className="footer-image">
        <img src={footerImg} alt="Footer Icon" />
      </div>
  </div>    
  );
};
