import React from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { UNFOLLOW_USER, FOLLOW_USER } from '~/lib/queries';

function FollowButton ({
  author, receiver, isFollowing, followCacheUpdate, unfollowCacheUpdate,
}) {
  if (!author || !receiver) return null;
  if (author === receiver) return null;

  if (isFollowing) {
    return (
      <Mutation
        mutation={UNFOLLOW_USER}
        update={unfollowCacheUpdate}
      >
        {(unfollowUser, { data, loading, error }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => unfollowUser({ variables: { userToUnfollow: receiver } })}
          >
            Siguiendo
          </Button>
        )}
      </Mutation>
    );
  }

  return (
    <Mutation
      mutation={FOLLOW_USER}
      update={followCacheUpdate}
    >
      {(followUser, { data, loading, error }) => (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => followUser({ variables: { userToFollow: receiver } })}
        >
          Seguir
        </Button>
      )}
    </Mutation>
  );
}

FollowButton.defaultProps = {
  author: null,
  receiver: null,
};

FollowButton.propTypes = {
  followCacheUpdate: propTypes.func.isRequired,
  unfollowCacheUpdate: propTypes.func.isRequired,
  author: propTypes.string,
  receiver: propTypes.string,
  isFollowing: propTypes.bool.isRequired,
};

export default FollowButton;
