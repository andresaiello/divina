import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Mutation } from 'react-apollo';

import { User } from '~/lib/graphql';

const StyledButton = styled(Button)`
  && {
    width: 80px;
    padding: 1px 16px;
    text-transform: none;
  }
`;

function FollowButton ({
  className, author, receiver, isFollowing,
}) {
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
            className={className}
            variant="outlined"
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
          className={className}
          variant="contained"
          color="secondary"
          onClick={() => followUser({ variables: { userToFollow: receiver } })}
        >
          Seguir
        </StyledButton>
      )}
    </Mutation>
  );
}

FollowButton.defaultProps = {
  className: '',
  author: null,
  receiver: null,
};

FollowButton.propTypes = {
  className: propTypes.string,
  author: propTypes.string,
  receiver: propTypes.string,
  isFollowing: propTypes.bool.isRequired,
};

export default FollowButton;
