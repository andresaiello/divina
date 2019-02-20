import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import loginRequired from '~/HOCs/loginRequired';
import { Link } from '~/server/routes';

import ProfileInfo from './ProfileInfo';
import PhotoGrid from './PhotoGrid';

const StyledProfile = styled.article`

`;

function MyProfile (props) {
  const {
    profile,
  } = props;

  const editProfile = (
    <Link route="editProfile" prefetch>
      <Button>Editar</Button>
    </Link>
  );

  return (
    <StyledProfile>
      <ProfileInfo
        action={editProfile}
        followersCount={profile.followersCount}
        followingCount={profile.followingCount}
        postsCount={profile.postsCount}
        {...{ ...profile.user }}
      />
      <PhotoGrid userId={profile.user._id} username={profile.user.username} />
    </StyledProfile>
  );
}

MyProfile.propTypes = {
  profile: propTypes.shape({
    postsCount: propTypes.number.isRequired,
    user: propTypes.shape({
      _id: propTypes.string.isRequired,
      username: propTypes.string.isRequired,
      profilePic: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default loginRequired(withMainLayout(MyProfile));
