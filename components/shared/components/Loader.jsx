import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const formatSize = size => (typeof size === 'number' ? `${size}px` : size);

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

  .progress {
    color: #0000003b;
    margin-top: ${({ height, size }) => (height ? `calc(${half(height)} - ${half(size)})` : `calc(50% - ${half(size)})`)};
    margin-bottom: ${({ height, size }) => (height ? `calc(${half(height)} - ${half(size)})` : `calc(50% - ${half(size)})`)};
  }
`;

export default function Loader ({ size, ...rest }) {
  return (
    <StyledLoader {...{ size, ...rest }}>
      <CircularProgress className="progress" {...{ size }} />
    </StyledLoader>
  );
}

Loader.defaultProps = {
  size: '30px',
};

Loader.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
