import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from '@material-ui/core';

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
      display: grid;
      position: absolute;
      width: 100%;
      align-content: start;
      /* -15px because grid row gap */
      grid-template-columns: calc(30% - 7.5px) calc(70% - 7.5px);
      grid-column-gap: 15px;
      align-items: center;
      padding: 4vh 15px 0;

      &.contrastBackground {
        background-color: hsla(0, 0%, 0%, 0.55);
      }

      .title {
        font-size: 1.75rem;

        &.white {
          color: white;
        }
      }

      .subtitle {
        color: rgb(74, 74, 74);
        grid-column-start: span 2;
        font-size: 1.5rem;
        margin-top: 1rem;

        &.white {
          color: white;
        }
      }

      img {
        width: 100%;
        margin: 0 auto;
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
    position: fixed;
  }

  .slick-dots li button.customSliderDot {
    background-color: rgb(216, 216, 216, 0.25);
    width: 20px;
    height: 20px;
    border-radius: 15px;

    ::before {
      display: none;
    }
  }

  .slick-dots li.slick-active button.customSliderDot {
    background-color: ${({ theme }) => theme.palette.primary.main};
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
    cssEase: 'cubic-bezier(.57,.91,1,1)',
  };

  return (
    <StyledSlider {...settings}>
      <div className="slideContainer">
        <div className="content">
          <img src="/static/logo-con-texto.svg" alt="logo" />
          <Typography className="title" component="h1" variant="h4">
            Chatea y comparte
          </Typography>
          <Typography className="subtitle" component="h2" variant="h4">
            Comparte con tus amigas tus mejores looks y crea tendencia
          </Typography>
        </div>
        <img src="/static/background01.jpg" className="background" alt="slide" />
      </div>
      <div className="slideContainer">
        <div className="content">
          <img src="/static/logo-con-texto.svg" alt="logo" />
          <Typography className="title" component="h1" variant="h4">
            Comparte y gana dinero
          </Typography>
          <Typography className="subtitle" component="h2" variant="h4">
            Crea tendencia y gana dinero compartiendo tus looks
          </Typography>
        </div>
        <img src="/static/background03.png" className="background" alt="slide" />
      </div>
      <div className="slideContainer">
        <div className="content contrastBackground">
          <img src="/static/logo-con-texto-blanco.svg" alt="logo" />
          <Typography className="title white" component="h1" variant="h4">
            Compra, guarda y combina
          </Typography>
          <Typography className="subtitle white" component="h2" variant="h4">
            Elige y ordena los conjuntos que más te gustaron
          </Typography>
        </div>
        <img src="/static/background02.png" className="background" alt="slide" />
      </div>
    </StyledSlider>
  );
}

Carousel.propTypes = {};
