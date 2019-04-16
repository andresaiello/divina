import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ClickAwayListener, Fade } from '@material-ui/core';

import { formatPrice } from '~/util';
import Image from '../../Image';
import Dot from './Dot';
import DotTooltip from './DotTooltip';
import RemoveDotTooltip from './RemoveDotTooltip';
import { POST_MAX_WIDTH } from '~/constants';

const Container = styled.div`
  position: relative;
  height: 100vw;
  width: 100vw;
  max-height: ${POST_MAX_WIDTH}px;
  max-width: ${POST_MAX_WIDTH}px;
  margin: 0 auto;

  .bagText,
  .bag {
    position: absolute;
  }

  .bag {
    left: 17.5px;
    bottom: 17.5px;
  }

  .bagText {
    left: 10px;
    bottom: 10px;
    width: 80%;
    height: 33px;
    background: black;
    display: flex;
    align-items: center;
    border-radius: 5px;

    p {
      display: inline-block;
      color: white;
      margin: 0 auto;
    }
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

// @todo: maybe update dot position on resize..

const ImageWithDots = React.memo(({
  className,
  dots,
  onImageLoad,
  src,
  postId,
  disableTooltip,
  isUserEditing,
  openTooltip, setOpenTooltip,
  onDotClick, onDotLinkClick, ...rest
}) => {
  const [tapToWatchVisible, setTapToWatchVisible] = useState(true);
  const [imageSize, setImageSize] = useState({ width: null, height: null });
  const [tooltipsVisible, toggleTooltips] = useState(false);

  useEffect(() => {
    const tapToWatchTimeout = setTimeout(() => setTapToWatchVisible(false), 5000);

    return () => { clearTimeout(tapToWatchTimeout); };
  }, []);

  function handleImageLoad (e) {
    if (onImageLoad) onImageLoad(e);
    const { width, height } = e.target;
    setImageSize({ width, height });
  }

  function openTooltips () {
    setTapToWatchVisible(false);

    if (!tooltipsVisible) {
      toggleTooltips(true);
    }
  }

  const shouldDisplayDots = !tapToWatchVisible || isUserEditing;

  return (
    <Container
      className={className}
      onClick={openTooltips}
    >
      {!isUserEditing && dots.length > 0
        && (
          <>
            <Fade in={tapToWatchVisible}>
              <div className="bagText">
                <p>Toca para ver las prendas</p>
              </div>
            </Fade>
            <Fade in={!tooltipsVisible}>
              <img className="bag" width="20" src="/static/WhiteShopBag.svg" alt="bag" />
            </Fade>
          </>
        )
      }
      <StyledImage
        src={src}
        onLoad={handleImageLoad}
        {...rest}
      />
      {shouldDisplayDots && imageSize.height && imageSize.width && dots.map((dot) => {
        const dotElement = (
          <Fade in={shouldDisplayDots}>
            <Dot
              key={dot._id}
              displayDot
              onClick={e => onDotClick(e, dot)}
              color={dot.color}
              xPosition={dot.xPosition}
              yPosition={dot.yPosition}
              containerWidth={imageSize.width}
              containerHeight={imageSize.height}
            />
          </Fade>
        );

        if (disableTooltip) {
          return dotElement;
        }

        if (isUserEditing) {
          return (
            <ClickAwayListener
              key={dot._id}
              onClickAway={() => setOpenTooltip('')}
            >
              <RemoveDotTooltip
                key={dot._id}
                open={openTooltip === dot._id}
                dotId={dot._id}
                postId={postId}
                dots={dots}
              >
                {dotElement}
              </RemoveDotTooltip>
            </ClickAwayListener>
          );
        }

        return (
          <ClickAwayListener
            key={dot._id}
            // makes it happen after openTooltips function if the click is inside the image
            onClickAway={() => (tooltipsVisible ? setTimeout(() => toggleTooltips(false), 10) : null)}
          >
            <DotTooltip
              onClick={() => onDotLinkClick(dot)}
              brandName={dot.brand.name}
              brandWebsite={dot.brand.website}
              price={formatPrice(dot.price, dot.currency)}
              open={tooltipsVisible}
            >
              {dotElement}
            </DotTooltip>
          </ClickAwayListener>
        );
      })}
    </Container>
  );
});

ImageWithDots.defaultProps = {
  className: '',
  dots: [],
  onImageLoad: null,
  isUserEditing: false,
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
  isUserEditing: propTypes.bool,
  postId: ({ isUserEditing, ...rest }, propName) => {
    if (isUserEditing) {
      return rest[propName]
        ? null : new Error(`The prop ${propName} is required when using isUserEditing`);
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

export default ImageWithDots;
