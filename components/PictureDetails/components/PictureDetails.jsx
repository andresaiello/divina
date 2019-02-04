import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import withRouteProgress from '~/HOCs/withRouteProgress';
import { Image } from '~/components/shared';

import Head from './Head';
import SubBar from './SubBar';

const StyledPictureDetails = styled.article`
  height: 100vh;

  .image {
    height: 75vh;
  }
`;

const ProfileActions = styled.aside`

`;

function PictureDetails ({
  author, comments, picUrl, ...rest
}) {
  return (
    <StyledPictureDetails {...rest}>
      <Head {...{ ...author }} />
      <Image
        className="image"
        withLoader
        src={picUrl}
        alt="Post"
      />
      <SubBar />
    </StyledPictureDetails>
  );
}

PictureDetails.propTypes = {
  author: propTypes.shape({
    profilePic: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
  }).isRequired,
  picUrl: propTypes.string.isRequired,
};

export default withRouteProgress(PictureDetails);
