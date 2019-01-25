import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import ProfileInfo from './ProfileInfo';
import PhotoGrid from './PhotoGrid';

const StyledProfile = styled.article`

`;

function MyProfile () {
  return (
    <StyledProfile>
      <ProfileInfo action={<Button>Configuración</Button>} />
      <PhotoGrid />
    </StyledProfile>
  );
}

export default withMainLayout(MyProfile);
