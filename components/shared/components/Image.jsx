import React from 'react';
import propTypes from 'prop-types';
import ReactImage from 'react-image';
import Loader from './Loader';

const Image = ({
  withLoader, width, height, ...rest
}) => (
  <ReactImage
    loader={withLoader ? <Loader {...{ height, width }} /> : null}
    unloader={<img src="/static/imageNotFound.png" width="100%" alt="Not found" />}
    {...{ height, width, ...rest }}
  />
);

Image.defaultProps = {
  resize: 1,
  withLoader: false,
  height: '100%',
  width: '100%',
};

Image.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  resize: propTypes.number,
  withLoader: propTypes.bool,
  height: ({ withLoader, ...rest }, propName) => {
    if (withLoader) {
      return propName in rest
        ? null : new Error(`The prop ${propName} is required when using withLoader`);
    }
    return null;
  },
  width: ({ withLoader, ...rest }, propName) => {
    if (withLoader) {
      return propName in rest
        ? null : new Error(`The prop ${propName} is required when using withLoader`);
    }
    return null;
  },
};

export default Image;
