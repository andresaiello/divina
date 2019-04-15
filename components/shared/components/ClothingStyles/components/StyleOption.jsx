import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Option = styled.div`
  position: relative;
  user-select: none;
  cursor: pointer;

  img {
    border-radius: 5px;
  }

  p {
    position: absolute;
    color: white;
    bottom: 10%;
    left: 27%;
    font-weight: bold;
    margin: 0;

    &.background {
      bottom: 7.5%;
      left: 12.5%;
      width: 75%;
      background-color: white;
      color: black;
      border-radius: 4px;
      text-align: center;
    }
  }
`;

export default function StyleOption ({ imgSrc, styleName }) {
  return (
    <Option>
      <img
        src={imgSrc}
        width="100%"
        alt="estilo"
      />
      <p className="background">{styleName}</p>
    </Option>
  );
}

StyleOption.propTypes = {
  imgSrc: propTypes.string.isRequired,
  styleName: propTypes.string.isRequired,
};
