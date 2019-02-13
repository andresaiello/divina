import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import withRouteProgress from '~/HOCs/withRouteProgress';
import { Image, Comments } from '~/components/shared';

import Head from './Head';
import SubBar from './SubBar';

const StyledPictureDetails = styled.article`
  height: 100vh;

  .image {
    height: 50vh;
  }
`;

function PictureDetails ({
  postId, author, comments, picUrl, caption, ...rest
}) {
  return (
    <StyledPictureDetails {...rest}>
      <Head {...{ ...author }} />
      <Image
        className="image"
        fitCover
        withLoader
        src={picUrl}
        alt="Post"
      />
      <SubBar caption={caption} />
      <Comments postId={postId} />
    </StyledPictureDetails>
  );
}

PictureDetails.propTypes = {
  postId: propTypes.string.isRequired,
  author: propTypes.shape({
    profilePic: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
  }).isRequired,
  picUrl: propTypes.string.isRequired,
  caption: propTypes.string.isRequired,
};

export default withRouteProgress(PictureDetails);
