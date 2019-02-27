import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { User } from '~/lib/graphql';

const StyledButton = styled(Button)`
  width: 88.75px;
`;

function FollowButton ({ author, receiver, isFollowing }) {
  // @todo: bring followers/following with button mutation so the cache gets updated automatically
  if (!author || !receiver) return null;
  if (author === receiver) return null;

  if (isFollowing) {
    return (
      <Mutation
        mutation={User.Mutations.UNFOLLOW}
      >
        {(unfollowUser, { data, loading, error }) => (
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => unfollowUser({ variables: { userToUnfollow: receiver } })}
          >
            Siguiendo
          </StyledButton>
        )}
      </Mutation>
    );
  }

  return (
    <Mutation
      mutation={User.Mutations.FOLLOW}
    >
      {(followUser, { data, loading, error }) => (
        <StyledButton
          variant="outlined"
          color="primary"
          onClick={() => followUser({ variables: { userToFollow: receiver } })}
        >
          Seguir
        </StyledButton>
      )}
    </Mutation>
  );
}

FollowButton.defaultProps = {
  author: null,
  receiver: null,
};

FollowButton.propTypes = {
  author: propTypes.string,
  receiver: propTypes.string,
  isFollowing: propTypes.bool.isRequired,
};

export default FollowButton;
