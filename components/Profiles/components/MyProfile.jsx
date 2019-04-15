import React, { Component, useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import withMainLayout from '~/HOCs/withMainLayout';
import { Link } from '~/server/routes';

import ProfileInfo from './ProfileInfo';
import PhotoGrid from './PhotoGrid';
import { ClothingStylesModal } from '~/components/shared';

const StyledProfile = styled.article`
  button {
    text-transform: none;
    border-radius: 0;
    padding: 0 16px;
  }
`;

function MyProfile ({ profile, ...rest }) {
  const [isClothingStylesModalOpen, toggleClothingStylesModal] = useState(false);

  const editProfile = (
    <Link route="editProfile" prefetch>
      <Button variant="outlined">editar</Button>
    </Link>
  );

  return (
    <StyledProfile {...rest}>
      <ClothingStylesModal
        isOpen={isClothingStylesModalOpen}
        close={() => toggleClothingStylesModal(false)}
      />
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

export default withMainLayout(MyProfile);
