import "./styles/Slide3.css";
import bottleImg from "../images/bottle.png";
import btnMore from "../images/btn_more.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import { useState } from "react";
import ModalSlider from "./ModalSlider";

const Slide3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`swiper-slide slide3 ${isModalOpen ? "modal-open" : ""}`}>
      <div className="bg-left-cont"></div>
      <div className="bg-right-cont"></div>

      <div className="bottle-image-container">
        <img src={bottleImg} alt="Bottle" className="bottle-image" />
      </div>
      <div className="slide-text-container">
        <p className="slide-title">Ключевое сообщение</p>
        <h1 className="slide-main-title">
          BREND<strong>XY</strong>
        </h1>

        <div className="card-container">
          <div className="card">
            <img className="icon" src={icon2} alt="Icon 1" />
            <p>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies.
            </p>
          </div>
          <div className="cont-btn-card">
            <div className="card">
              <img className="icon" src={icon1} alt="Icon 2" />
              <p>
                A arcu <br />
                cursus vitae
              </p>
            </div>
            <button className="details-button" onClick={handleShowModal}>
              <img src={btnMore} alt="More" />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ModalSlider isModalOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Slide3;

