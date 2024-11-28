import { useEffect, useState } from "react";
import "./styles/Slide2.css";

const Slide2 = ({ isActive }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isActive) {
            const timer = setTimeout(() => {
                setAnimate(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setAnimate(false);
        }
    }, [isActive])

  return (
    <div className="swiper-slide slide2">
      <div className="slide2-header-container">
        <h2 className="slide2-header">
          ТЕКСТ <br />
          СООБЩЕНИЯ
        </h2>
      </div>
      <div className="slide2-content">
        <div className='worm-container'>
          <div className={`worm worm-1 ${animate ? "visible" : ""}`}></div>
          <div className={`worm worm-2 ${animate ? "visible" : ""}`}></div>
          <div className={`worm worm-3 ${animate ? "visible" : ""}`}></div>
          <div className={`worm worm-4 ${animate ? "visible" : ""}`}></div>
          <div className={`worm worm-5 ${animate ? "visible" : ""}`}></div>
        </div>
        <div className="text-box">
          <div className="par-message">
            <p>
              <strong>Lorem ipsum dolor sit amet</strong>, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Duis ut diam quam nulla. Mauris in aliquam
              sem fringilla ut morbi tincidunt. Vitae aliquet nec ullamcorper
              sit amet risus nulla eget felis. Nulla pharetra diam sit amet
              nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis.
              Est sit amet facilisis magna. Neque laoreet suspendisse interdum
              consectetur libero id. Nec ullamcorper sit amet risus nulla eget
              felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin
              tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc.
              Massa massa ultricies mi quis. Sit amet massa vitae tortor
              condimentum lacinia. Et malesuada fames ac turpis egestas integer
              eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus
              interdum posuere. Et suspendisse interdum consectetur libero id.
              Nec ullamcorper sit amet risus nulla eget felis eget. Mollis
              aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod
              quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies
              mi quis. Sit amet massa vitae tortor condimentum lacinia. Et
              malesuada fames ac turpis egestas integer eget. Elementum pulvinar
              etiam non quam lacus suspendisse faucibus interdum posuere.
              eget. Elementum pulvinar etiam non quam lacus suspendisse faucibus
              interdum posuere. Et suspendisse interdum consectetur libero id.
              Nec ullamcorper sit amet risus nulla eget felis eget. Mollis
              aliquam ut porttitor leo a diam sollicitudin tempor id. Euismod
              quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies
              mi quis. Sit amet massa vitae tortor condimentum lacinia. Et
              malesuada fames ac turpis egestas integer eget. Elementum pulvinar
              etiam non quam lacus suspendisse faucibus interdum posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
