import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import { Link } from '~/server/routes';

import ProfileInfo from './ProfileInfo';
import PhotoGrid from './PhotoGrid';

const StyledProfile = styled.article`

`;

function MyProfile () {
  const editProfile = (
    <Link route="editProfile" prefetch>
      <Button>Editar</Button>
    </Link>
  );

  return (
    <StyledProfile>
      <ProfileInfo action={editProfile} />
      <PhotoGrid />
    </StyledProfile>
  );
}

export default withMainLayout(MyProfile);
