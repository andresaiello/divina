import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { formatPrice } from '~/util';
import Image from '../../Image';
import Dot from './Dot';
import DotTooltip from './DotTooltip';
import RemoveDotTooltip from './RemoveDotTooltip';

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

// @todo: maybe update dot position on resize..

export default function ImageWithDots ({
  className,
  dots,
  onImageLoad,
  src,
  postId,
  disableTooltip,
  useRemoveDotTooltip,
  openTooltip, setOpenTooltip,
  onDotClick, onDotLinkClick, ...rest
}) {
  const [imageSize, setImageSize] = useState({ width: null, height: null });
  const [tooltipsVisible, toggleTooltips] = useState(false);

  function handleImageLoad (e) {
    if (onImageLoad) onImageLoad(e);
    const { width, height } = e.target;
    setImageSize({ width, height });
  }

  function toggle () {
    toggleTooltips(!tooltipsVisible);
    setOpenTooltip('');
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
      {imageSize.height && imageSize.width && dots && dots.map((dot) => {
        const dotElement = (
          <Dot
            key={dot._id}
            displayDot
            onClick={e => onDotClick(e, dot)}
            xPosition={dot.xPosition}
            containerWidth={imageSize.width}
            yPosition={dot.yPosition}
            containerHeight={imageSize.height}
          />
        );

        if (disableTooltip) {
          return dotElement;
        }

        if (useRemoveDotTooltip) {
          return (
            <RemoveDotTooltip
              key={dot._id}
              open={openTooltip === dot._id}
              dotId={dot._id}
              postId={postId}
              dots={dots}
            >
              {dotElement}
            </RemoveDotTooltip>
          );
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
  onImageLoad: null,
  useRemoveDotTooltip: false,
  onDotClick: () => {},
  onDotLinkClick: () => {},
  setOpenTooltip: () => {},
  postId: null,
};

ImageWithDots.propTypes = {
  className: propTypes.string,
  onImageLoad: propTypes.func,
  onDotClick: propTypes.func,
  onDotLinkClick: propTypes.func,
  setOpenTooltip: propTypes.func,
  useRemoveDotTooltip: propTypes.bool,
  postId: ({ useRemoveDotTooltip, ...rest }, propName) => {
    if (useRemoveDotTooltip) {
      return rest[propName]
        ? null : new Error(`The prop ${propName} is required when using useRemoveDotTooltip`);
    }
    return null;
  },
  src: propTypes.string.isRequired,
  dots: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    xPosition: propTypes.number.isRequired,
    yPosition: propTypes.number.isRequired,
  })),
};
