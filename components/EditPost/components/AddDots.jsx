import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWithDots, Dot } from '~/components/shared';

const Container = styled.div`
  position: relative;
`;

export default function AddDots ({
  existentDots, picUrl, selectDotPlace, getImageSize, displayDot, dotX, dotY, imageSizeX, imageSizeY,
}) {
  return (
    <Container>
      <ImageWithDots
        onClick={selectDotPlace}
        onLoad={getImageSize}
        fitCover
        withLoader
        dots={existentDots}
        // newDot={(imageSizeX && imageSizeY
        //   && (
        //     <Dot
        //       displayDot={false}
        //       xPosition={dotX}
        //       yPosition={dotY}
        //       containerWidth={imageSizeX}
        //       containerHeight={imageSizeY}
        //     />
        //   )
        // )}
        src={picUrl}
        alt="Post"
      />
    </Container>
  );
}

AddDots.defaultProps = {
  existentDots: [],
};

AddDots.propTypes = {
  picUrl: propTypes.string.isRequired,
  existentDots: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    xPosition: propTypes.number.isRequired,
    yPosition: propTypes.number.isRequired,
  })),
};
