import React from 'react';
import styled from 'styled-components';

import withMainLayout from '~/HOCs/withMainLayout';
import { Image } from '~/components/shared';

import Head from './Head';
import SubBar from './SubBar';

const StyledPictureDetails = styled.article`
  height: 100vh;

  .image {
    height: 55vh;
  }
`;

const ProfileActions = styled.aside`

`;

function PictureDetails () {
  return (
    <StyledPictureDetails>
      <Head />
      <Image
        className="image"
        withLoader
        src="/static/girl.jpeg"
        height="55vh"
        alt="Foto de perfil"
      />
      <SubBar />
    </StyledPictureDetails>
  );
}

export default PictureDetails;
