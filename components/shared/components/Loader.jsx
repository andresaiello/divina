import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';

// check if it's a number
const formatSize = size => (/^\d+$/.test(size) ? `${size}px` : size);

// divides an integer that has an unit (like 30px to 15px)
const half = (size = '0px') => {
  const strSize = typeof size !== 'string' ? size.toString() : size;
  const number = Math.floor(parseInt(strSize.replace(/\D+/g, ''), 10) / 2);
  const unit = strSize.replace(/[0-9]/g, '');
  return `${number}${unit && unit.length ? unit : 'px'}`;
};

const StyledLoader = styled.span`
  display: inline-block;
  grid-column-start: span 3;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: ${({ width }) => (width ? formatSize(width) : '100%')};
  height: ${({ height }) => (height ? formatSize(height) : '100%')};

  .container {
    display: flex;
    height: inherit;
    width: inherit;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .progress {
    color: rgba(0, 0, 0, .54);
    margin-top: ${({ height, size }) => (height ? `calc(${half(height)} - ${half(size)})` : `calc(50% - ${half(size)})`)};
    margin-bottom: ${({ height, size, text }) => (text
    ? null
    : height
      ? `calc(${half(height)} - ${half(size)})`
      : `calc(50% - ${half(size)})`)};
  }

  .text {
    margin-top: 7.5px;
    margin-bottom: ${({ height, size }) => (height ? `calc(${half(height)} - ${half(size)})` : `calc(50% - ${half(size)})`)};
  }
`;

export default function Loader ({ size, text, ...rest }) {
  return (
    <StyledLoader {...{ size, text, ...rest }}>
      <div className="container">
        <CircularProgress className="progress" {...{ size }} />
        {text && <Typography className="text">{text}</Typography>}
      </div>
    </StyledLoader>
  );
}

Loader.defaultProps = {
  size: '30px',
  text: null,
};

Loader.propTypes = {
  text: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
