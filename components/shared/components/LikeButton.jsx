import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

import { UNLIKE_POST, LIKE_POST, FEED_GET_POSTS } from '~/lib/queries';

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
        mutation={UNLIKE_POST}
        update={(cache, { data }) => {
          // @todo pass update function as a prop to decouple from FEED query
          const prevQuery = cache.readQuery({ query: FEED_GET_POSTS, variables: { amount: 2 } });

          const newNodes = prevQuery.posts.nodes.map((n) => {
            if (n._id === postId) return { ...n, liked: false, likes: n.likes.filter(l => !(l === data.unlikePost._id)) };
            return n;
          });

          cache.writeQuery({
            query: FEED_GET_POSTS,
            variables: { amount: 2 },
            data: { ...prevQuery, posts: { ...prevQuery.posts, nodes: newNodes } },
          });
        }}
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
      mutation={LIKE_POST}
      update={(cache, { data }) => {
        // @todo pass update function as a prop to decouple from FEED query
        const prevQuery = cache.readQuery({ query: FEED_GET_POSTS, variables: { amount: 2 } });

        const newNodes = prevQuery.posts.nodes.map((n) => {
          if (n._id === postId) return { ...n, liked: true, likes: [...n.likes, data.likePost] };
          return n;
        });

        cache.writeQuery({
          query: FEED_GET_POSTS,
          variables: { amount: 2 },
          data: { ...prevQuery, posts: { ...prevQuery.posts, nodes: newNodes } },
        });
      }}
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
