import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { formatPrice } from '~/util';
import Image from '../../Image';
import Dot from './Dot';
import DotTooltip from './DotTooltip';

const Container = styled.div`
  position: relative;
  height: 100vw;
  max-height: 450px;
  width: 100vw;
  max-width: 450px;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

export default function ImageWithDots ({
  className, dots, newDot, onLoad, src, disableTooltip, onDotLinkClick, ...rest
}) {
  const [imageSize, setImageSize] = useState({ width: null, height: null });
  const [tooltipsVisible, toggleTooltips] = useState(false);

  function handleImageLoad (e) {
    if (onLoad) onLoad(e);
    const { width, height } = e.target;
    setImageSize({ width, height });
  }

  function toggle () {
    toggleTooltips(!tooltipsVisible);
  }

  return (
    <Container
      className={className}
      onClick={toggle}
    >
      <StyledImage
        src={src}
        onLoad={handleImageLoad}
        {...rest}
      />
      {newDot}
      {imageSize.height && imageSize.width && dots && dots.map((dot) => {
        const dotElement = (
          <Dot
            key={dot._id}
            displayDot
            xPosition={dot.xPosition}
            containerWidth={imageSize.width}
            yPosition={dot.yPosition}
            containerHeight={imageSize.height}
          />
        );

        if (disableTooltip) {
          return dotElement;
        }

        return (
          <DotTooltip
            key={dot._id}
            onClick={() => onDotLinkClick(dot)}
            brandName={dot.brand.name}
            brandWebsite={dot.brand.website}
            price={formatPrice(dot.price, dot.currency)}
            open={tooltipsVisible}
          >
            {dotElement}
          </DotTooltip>
        );
      })}
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
