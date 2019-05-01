import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Option = styled.div`
  cursor: pointer;
  position: relative;
  user-select: none;
  width: 100%;
  height: 100%;
  min-height: 85px;

  img {
    filter: ${({ selected }) => (selected ? 'saturate(2) brightness(100%) contrast(44%)' : null)};
    border-radius: 5px;
    max-height: 85px;
    object-fit: cover;
  }

  p {
    position: absolute;
    color: ${({ selected, theme }) => (selected ? `${theme.palette.secondary.main}` : 'white')};
    bottom: 10%;
    left: 27%;
    font-weight: bold;
    margin: 0;
    padding-bottom: 2px;

    &.background {
      color: ${({ selected, theme }) => (selected ? `${theme.palette.secondary.main}` : 'black')};
      bottom: 7.5%;
      left: 12.5%;
      width: 75%;
      background-color: white;
      border-radius: 4px;
      text-align: center;
    }
  }
`;

export default function StyleOption({ imgSrc, styleName, selected, ...rest }) {
  return (
    <Option selected={selected} {...rest}>
      <img src={imgSrc} width="100%" alt="estilo" />
      <p className="background">{styleName}</p>
    </Option>
  );
}

StyleOption.defaultProps = {
  selected: false,
};

StyleOption.propTypes = {
  imgSrc: propTypes.string.isRequired,
  styleName: propTypes.string.isRequired,
  selected: propTypes.bool,
};
