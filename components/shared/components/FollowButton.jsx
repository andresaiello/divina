import React from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';

function FollowButton ({ isFollowing }) {
  return (isFollowing
    ? (
      <Button variant="contained" color="primary">
        Siguiendo
      </Button>
    )
    : (
      <Button variant="outlined" color="primary">
        Seguir
      </Button>
    )
  );
}

FollowButton.propTypes = {
  isFollowing: propTypes.bool.isRequired,
};

export default FollowButton;
