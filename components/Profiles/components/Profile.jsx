import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

import SecContext from '~/context/secContext';
import withMainLayout from '~/HOCs/withMainLayout';
import { FollowButton } from '~/components/shared';

import PhotoGrid from './PhotoGrid';
import ProfileInfo from './ProfileInfo';

const StyledProfile = styled.article`
`;

function Profile ({ profile = {} }) {
  if (!profile.user) return <div>El perfil no existe!</div>; // @todo set better error
  const secContext = useContext(SecContext);

  // @todo: set max length for user name, and adapt design for long usernames

  return (
    <StyledProfile>
      <ProfileInfo
        action={(
          <FollowButton
            author={secContext.user && secContext.user._id}
            receiver={profile.user && profile.user._id}
            isFollowing={profile.authorFollowed && profile.authorFollowed.isFollowing}
          />
        )}
        followersCount={profile.followersCount}
        followingCount={profile.followingCount}
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
