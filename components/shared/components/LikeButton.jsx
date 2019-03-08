import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { IconButton } from '@material-ui/core';
import { Favorite as Liked, FavoriteBorder as NonLiked } from '@material-ui/icons';

import { Feed, Post } from '~/lib/graphql';

const StyledIconButton = styled(IconButton)`
  .liked {
    color: red;
  }
`;

export default function LikeButton ({
  className, author, postId, liked,
}) {
  if (!author) return <NonLiked />;

  if (liked) {
    return (
      <Mutation
        mutation={Post.Mutations.UNLIKE}
      >
        {(unlikePost, { data, loading, error }) => (
          <StyledIconButton
            className={className}
            aria-label="Like"
            onClick={() => unlikePost({ variables: { postId } })}
          >
            <Liked className="liked" />
          </StyledIconButton>
        )}
      </Mutation>
    );
  }

  return (
    <Mutation
      mutation={Post.Mutations.LIKE}
    >
      {(likePost, { data, loading, error }) => (
        <StyledIconButton
          className={className}
          aria-label="Like"
          onClick={() => likePost({ variables: { postId } })}
        >
          <NonLiked />
        </StyledIconButton>
      )}
    </Mutation>
  );
}

LikeButton.defaultProps = {
  author: null,
  className: null,
};

LikeButton.propTypes = {
  className: propTypes.string,
  author: propTypes.string,
  postId: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
};
