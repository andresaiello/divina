import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Image from '../../Image';
import Dot from './Dot';

const Container = styled.div`
  position: relative;
  height: 100vw;
  max-height: 720px;
  width: 100vw;
  max-width: 720px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

export default function ImageWithDots ({
  className, dots, newDot, onLoad, src, ...rest
}) {
  const [imageSize, setImageSize] = useState({ width: null, height: null });

  function handleImageLoad (e) {
    if (onLoad) onLoad(e);
    const { width, height } = e.target;
    setImageSize({ width, height });
  }

  return (
    <Container className={className}>
      <StyledImage
        src={src}
        onLoad={handleImageLoad}
        {...rest}
      />
      {newDot}
      {imageSize.height && imageSize.width && dots && dots.map(dot => (
        <Dot
          key={dot._id}
          displayDot
          xPosition={dot.xPosition}
          containerWidth={imageSize.width}
          yPosition={dot.yPosition}
          containerHeight={imageSize.height}
        />
      ))}
    </Container>
  );
}

ImageWithDots.defaultProps = {
  className: '',
  dots: [],
  onLoad: null,
  newDot: null,
};

ImageWithDots.propTypes = {
  className: propTypes.string,
  onLoad: propTypes.func,
  newDot: propTypes.element,
  src: propTypes.string.isRequired,
  dots: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    xPosition: propTypes.number.isRequired,
    yPosition: propTypes.number.isRequired,
  })),
};
