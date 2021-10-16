import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import heroSliderData from '../assets/fake-data/hero-slider';
import { Link } from 'react-router-dom';
import Button from './Button';

HeroSlider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOute: PropTypes.number,
};

function HeroSlider({ data, control, timeOut = 3000, auto }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data]);

  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, timeOut]);

  return (
    <div className="heroslider">
      {data.map((item, index) => (
        <HeroSliderItem key={index} item={item} active={index === activeSlide} />
      ))}

      {control ? (
        <div className="heroslider-control">
          <div className="heroslider-control-item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>

          <div className="heroslider-control-item">
            <div className="index">
              {activeSlide + 1}/{data.length}
            </div>
          </div>

          <div className="heroslider-control-item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
}
const HeroSliderItem = ({ item, active }) => (
  <div className={`heroslider-item ${active ? 'active' : ''}`}>
    <div className="heroslider-item-info">
      <div className={`heroslider-item-info-title color-${item.color}`}>
        <span>{item.title}</span>
      </div>

      <div className="heroslider-item-info-desc">
        <span>{item.description}</span>
      </div>

      <div className="heroslider-item-info-btn">
        <Link to={item.path}>
          <Button bgColor={item.color} icon="bx bx-cart" animation={true} size="sm">
            See more
          </Button>
        </Link>
      </div>
    </div>

    <div className="heroslider-item-img">
      {/* <div className={`shape bg-${item.color}`}></div> */}
      <img src={item.img} alt="" />
    </div>
  </div>
);

export default HeroSlider;
