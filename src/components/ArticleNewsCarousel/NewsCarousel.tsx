import React, { useEffect, useState } from 'react';
import classes from './NewsCarousel.module.css';
import Old_UVT from '../../assets/images/Old_UVT.jpg';
import UVT1 from '../../assets/images/UVT1.jpg';
import UVT2 from '../../assets/images/UVT2.jpg';
import UVT3 from '../../assets/images/UVT3.jpg';

const slides = [
  {
    id: 1,
    bg: Old_UVT,
    kenburnStart: "center center",
  },
  {
    id: 2,
    bg: UVT1,
    kenburnStart: "top left",
  },
  {
    id: 3,
    bg: UVT2,
    kenburnStart: "top center",
  },
  {
    id: 4,
    bg: UVT3,
    kenburnStart: "top right",
  },

];

const NewsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className={classes.kenburnSlider}>
      <ul className={classes.slides}>
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            className={`${classes.slide} ${index === activeIndex ? classes.active : ''}`}
            style={{
              backgroundImage: `url(${slide.bg})`,
              transformOrigin: slide.kenburnStart,
            }}
          ></li>
        ))}
      </ul>
      <div className={classes.flexDirectionNav}>
        <button className={classes.flexPrev} onClick={goToPrevSlide}>
        Previous
        </button>
        <button className={classes.flexNext} onClick={goToNextSlide}>
         Next
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
