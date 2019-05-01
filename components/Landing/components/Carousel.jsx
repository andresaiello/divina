import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  height: 100%;

  .slick-list,
  .slick-track,
  .slick-slide div,
  .slick-slide img.background {
    height: 100%;
  }

  .slideContainer {
    position: relative;

    .content {
      position: absolute;
      margin-top: 5vh;
      padding: 0 15px;
      width: 100%;

      img {
        width: 30%;
        max-width: 150px;
      }
    }
  }

  .slick-slide div img.background {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .slick-dots {
    bottom: 7vh;
  }

  .slick-dots li button.customSliderDot {
    background-color: rgb(216, 216, 216);
    width: 20px;
    height: 20px;
    border-radius: 15px;
  }
`;

export default function Carousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => <button className="customSliderDot" type="button" />,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: 'linear',
  };

  return (
    <StyledSlider {...settings}>
      <div className="slideContainer">
        <div className="content">
          <img src="/static/logo-con-texto.svg" alt="logo" />
        </div>
        <img src="/static/background01.jpg" className="background" alt="slide" />
      </div>
      <div className="slideContainer">
        <div className="content">
          <img src="/static/logo-con-texto-blanco.svg" alt="logo" />
        </div>
        <img src="/static/background02.png" className="background" alt="slide" />
      </div>
      <div className="slideContainer">
        <div className="content">
          <img src="/static/logo-con-texto.svg" alt="logo" />
        </div>
        <img src="/static/background03.png" className="background" alt="slide" />
      </div>
    </StyledSlider>
  );
}

Carousel.propTypes = {};
