import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Image } from '~/components/shared';

const Container = styled.div`
  position: relative;
`;

const dotSize = '20';

const CurrentDot = styled.div`
  position: absolute;
  display: ${({ displayDot }) => (displayDot ? 'unset' : 'none')};
  left: ${({ dotX }) => dotX - dotSize / 2}px;
  top: ${({ dotY }) => dotY - dotSize / 2}px;
  height: ${dotSize}px;
  width: ${dotSize}px;
  background-color: rgba(0, 0, 0, .58);
  border-radius: 50%;
  border: 1px solid white;
`;

export default function AddDots ({
  picUrl, selectDotPlace, getImageSize, displayDot, dotX, dotY,
}) {
  return (
    <Container>
      <CurrentDot {...{ displayDot, dotX, dotY }} />
      <Image
        onMouseMove={selectDotPlace}
        onLoad={getImageSize}
        fitCover
        withLoader
        src={picUrl}
        alt="Post"
      />
    </Container>
  );
}

AddDots.propTypes = {
  picUrl: propTypes.string.isRequired,
};
