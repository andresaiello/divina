import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { DOT_DEFAULT_COLOR } from '~/constants';

const dotSize = '20';

const StyledDot = styled.div`
  position: absolute;
  display: ${({ displayDot }) => (displayDot ? null : 'none')};
  left: ${({ xPosition, containerWidth }) =>
    `calc((${containerWidth}px * ${xPosition}) - ${dotSize}px / 2)`};
  top: ${({ yPosition, containerHeight }) =>
    `calc((${containerHeight}px * ${yPosition}) - ${dotSize}px / 2)`};
  height: ${dotSize}px;
  width: ${dotSize}px;
  background-color: ${({ color }) => color || DOT_DEFAULT_COLOR};
  border-radius: 50%;
`;

function Dot(props) {
  return <StyledDot {...props} />;
}

Dot.defaultProps = {
  displayDot: true,
  color: DOT_DEFAULT_COLOR,
};

Dot.propTypes = {
  displayDot: propTypes.bool,
  color: propTypes.string,
  xPosition: propTypes.number.isRequired,
  containerWidth: propTypes.number.isRequired,
  yPosition: propTypes.number.isRequired,
  containerHeight: propTypes.number.isRequired,
};

export default Dot;
