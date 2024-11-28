import "./styles/Slide1.css";
import btnWhatsNext from "../images/btn_whatsNext.png";

const Slide1 = ({ onNext, isActive }) => {
  const animationClass = isActive ? "levitating" : "";

  return (
    <div className="swiper-slide slide1">
      <div className="content">
        <p className="greeting">Привет,</p>
        <p className="first-line headline">
          Это <span className="highlight">НЕ</span>
        </p>
        <p className="headline">коммерческое</p>
        <div className="single-line">
          <p className="headline">задание</p>
          <button className="next-button" onClick={onNext}>
            <img src={btnWhatsNext} alt="Next" />
          </button>
        </div>
      </div>
      <div>
        <div className="element worm-main"></div>
        <div className="element worm-blurred"></div>
        <div className={`element ball-bakti1 ${animationClass}`}></div>
        <div className={`element ball-layer4 ${animationClass}`}></div>
        <div className={`element ball-layer5 ${animationClass}`}></div>
        <div className="element ball-layer4copy"></div>
        <div className={`element ball-layer8 ${animationClass}`}></div>
        <div className="element line-layer7"></div>
      </div>
    </div>
  );
};
export default Slide1;