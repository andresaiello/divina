import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';

import PhotoGrid from './PhotoGrid';
import ProfileInfo from './ProfileInfo';

const StyledProfile = styled.article`

`;

function Profile () {
  return (
    <StyledProfile>
      <ProfileInfo action={<Button color="primary">Seguir</Button>} />
      <PhotoGrid />
    </StyledProfile>
  );
}

export default withMainLayout(Profile);
