import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';

import PhotoGrid from './PhotoGrid';
import ProfileInfo from './ProfileInfo';

const StyledProfile = styled.article`

`;

function Profile ({ profile = {} }) {
  if (!profile.user) return <div>El perfil no existe!</div>; // @todo set better error

  return (
    <StyledProfile>
      <ProfileInfo
        action={<Button color="primary">Seguir</Button>}
        followers={1}
        following={1}
        postsCount={profile.postsCount}
        {...{ ...profile.user }}
      />
      <PhotoGrid userId={profile.user._id} username={profile.user.username} />
    </StyledProfile>
  );
}

Profile.propTypes = {

};

export default withMainLayout(Profile);
