import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { ImageWithDots } from '~/components/shared';

const Container = styled.div`
  position: relative;
`;

export default function EditDots ({
  existentDots, picUrl, selectDotPlace, getImageSize, postId,
}) {
  const [openTooltip, setOpenTooltip] = useState('');

  function onDotClick (e, dot) {
    e.stopPropagation();
    setOpenTooltip(dot._id);
  }

  return (
    <Container>
      <ImageWithDots
        onClick={selectDotPlace}
        onDotClick={onDotClick}
        onImageLoad={getImageSize}
        fitCover
        withLoader
        dots={existentDots}
        useRemoveDotTooltip
        openTooltip={openTooltip}
        setOpenTooltip={setOpenTooltip}
        postId={postId}
        src={picUrl}
        alt="Post"
      />
    </Container>
  );
}

EditDots.defaultProps = {
  existentDots: [],
};

EditDots.propTypes = {
  picUrl: propTypes.string.isRequired,
  selectDotPlace: propTypes.func.isRequired,
  getImageSize: propTypes.func.isRequired,
  postId: propTypes.string.isRequired,
  existentDots: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    xPosition: propTypes.number.isRequired,
    yPosition: propTypes.number.isRequired,
  })),
};
