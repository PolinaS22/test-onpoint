import './styles/ModalSlider.css';
import { useState } from 'react';
import btnClose from '../images/btn_close.png';
import btnPrev from '../images/btn_1.png';
import btnNext from '../images/btn_next.png';

const ModalSlider = ({ isModalOpen, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        [
            { number: "01", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
            { number: "02", text: "Faucibus pulvinar elementum integer enim" },
            { number: "03", text: "Faucibus pulvinar elementum integer enim" }
        ],
        [
            { number: "04", text: "Mi bibendum neque egestas congue quisque" },
            { number: "05", text: "Venenatis lectus magna fringilla urna" },
            { number: "06", text: "Venenatis lectus magna fringilla urna" }
        ]
    ]

    const handleNext = () => {
        setCurrentSlide((prev) => {
            let next = prev + 1;
            if (next >= slides.length) {
                next = 0;
            }
            return next;
        });
    };
    
    const handlePrev = () => {
        setCurrentSlide((prev) => {
            let prevSlide = prev - 1;
            if (prevSlide < 0) {
                prevSlide = slides.length - 1;
            }
            return prevSlide;
        });
    };
    
    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    if (!isModalOpen) return null;
    return (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <button className="modal-close" onClick={onClose}>
                <img src={btnClose} alt="Close" />
              </button>
              <p className="slide-title">Преимущества</p>
              <h1 className="slide-main-title">
                BREND<strong>XY</strong>
              </h1>
    
              <div className="slide-container">
                {slides[currentSlide].map((item, index) => (
                  <div key={index} className="advantage-item">
                    <p className="advantage-number">{item.number}</p>
                    <p className="advantage-text">{item.text}</p>
                  </div>
                ))}
              </div>
    
              <div className="navigation">
                <button
                  className="arrow left-arrow"
                  onClick={handlePrev}
                  disabled={false} 
                >
                  <img src={btnPrev} alt="Previous" width="10px" />
                </button>
                <div className="dots">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${currentSlide === index ? "active" : ""}`}
                      onClick={() => handleDotClick(index)}
                    ></button>
                  ))}
                </div>
                <button
                  className="arrow right-arrow"
                  onClick={handleNext}
                  disabled={false} 
                >
                  <img src={btnNext} alt="Next" width="10px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default ModalSlider;