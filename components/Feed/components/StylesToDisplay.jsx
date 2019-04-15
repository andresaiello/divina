import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 6px 3px 0px;
  overflow: hidden;

  .imageContainer {
    position: relative;
  }

  p {
    position: absolute;
    color: white;
    top: 46px;
    left: 58px;
    font-weight: bold;
  }

  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
    filter: saturate(2) brightness(100%) contrast(44%);

    margin: 0px 2.5px;

    :first-child {
      margin: 0px 2.5px 0px 0px;
    }
  }
`;

export default function StylesToDisplay () {
  return (
    <Container>
      <div className="imageContainer">
        <img src="https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2016/15/vogue_news_922575988_620x.jpg" alt="prueba" />
        <p>Estilo 1</p>
      </div>
      <div className="imageContainer">
        <img src="https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2016/15/vogue_news_922575988_620x.jpg" alt="prueba" />
        <p>Estilo 2</p>
      </div>
      <div className="imageContainer">
        <img src="https://cdn.vogue.es/uploads/images/thumbs/es/vog/2/s/2016/15/vogue_news_922575988_620x.jpg" alt="prueba" />
        <p>Estilo 3</p>
      </div>
    </Container>
  );
}
