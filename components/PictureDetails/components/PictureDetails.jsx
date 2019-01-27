import React from 'react';
import styled from 'styled-components';

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

function PictureDetails ({ imageUrl, ...rest }) {
  return (
    <StyledPictureDetails {...rest}>
      <Head />
      <Image
        className="image"
        withLoader
        src={imageUrl}
        alt="Foto de perfil"
      />
      <SubBar />
    </StyledPictureDetails>
  );
}

export default withRouteProgress(PictureDetails);
