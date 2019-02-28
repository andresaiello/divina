import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const dotSize = '20';

const StyledDot = styled.div`
  position: absolute;
  display: ${({ displayDot }) => (displayDot ? 'unset' : 'none')};
  left: ${({ xPosition, containerWidth }) => `calc((${containerWidth}px * ${xPosition}) - ${dotSize}px / 2)`};
  top: ${({ yPosition, containerHeight }) => `calc((${containerHeight}px * ${yPosition}) - ${dotSize}px / 2)`};
  height: ${dotSize}px;
  width: ${dotSize}px;
  background-color: rgba(0, 0, 0, .58);
  border-radius: 50%;
  border: 1px solid white;
`;

function Dot (props) {
  return (
    <StyledDot
      {...props}
    />
  );
}

Dot.defaultProps = {
  displayDot: true,
};

Dot.propTypes = {
  displayDot: propTypes.bool,
  xPosition: propTypes.number.isRequired,
  containerWidth: propTypes.number.isRequired,
  yPosition: propTypes.number.isRequired,
  containerHeight: propTypes.number.isRequired,
};

export default Dot;
