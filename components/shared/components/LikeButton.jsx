import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

import { Feed, Post } from '~/lib/graphql';

const StyledIconButton = styled(IconButton)`
  .liked {
    color: red;
  }
`;

export default function LikeButton ({ author, postId, liked }) {
  if (!author) return <Favorite className="liked" />;

  if (liked) {
    return (
      <Mutation
        mutation={Post.Mutations.UNLIKE}
      >
        {(unlikePost, { data, loading, error }) => (
          <StyledIconButton
            aria-label="Like"
            onClick={() => unlikePost({ variables: { postId } })}
          >
            <Favorite className="liked" />
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
          aria-label="Like"
          onClick={() => likePost({ variables: { postId } })}
        >
          <Favorite />
        </StyledIconButton>
      )}
    </Mutation>
  );
}

LikeButton.defaultProps = {
  author: null,
};

LikeButton.propTypes = {
  author: propTypes.string,
  postId: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
};
