import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import {
  Favorite, Visibility, Comment as AddComment, Share,
} from '@material-ui/icons';
import { LikeButton } from '~/components/shared';

const StyledSubBar = styled(Toolbar)`
  && {
    flex-wrap: wrap;
    padding: 0;

    p {
      margin: 0px 15px;
      width: 100%;
    }

    .favorite {
      color: red;
    }

    .info {
      display: flex;
      color: black;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 5px 7px 4px 3px;
    }

    .data {
      display: flex;

      span {
        margin-right: 5px;
      }
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    padding: 5px 3px;
    color: black;
  }
`;

const StyledLikeButton = styled(LikeButton)`
  && {
    padding: 5px 3px;
    color: black;
  }
`;

export default function SubBar ({
  caption, likes, postId, loggedUserId, liked,
}) {
  return (
    <StyledSubBar>
      <Typography component="p">
        {caption}
      </Typography>
      <div className="info">
        <div className="actions">
          <StyledLikeButton
            liked={liked}
            author={loggedUserId}
            postId={postId}
          />
          <StyledIconButton aria-label="Comment">
            <AddComment />
          </StyledIconButton>
          <StyledIconButton aria-label="Share">
            <Share />
          </StyledIconButton>
        </div>
        <div className="data">
          <span>{likes.nodes.length}</span>
          <Favorite className="favorite" />
        </div>
      </div>
    </StyledSubBar>
  );
}

SubBar.defaultProps = {
  loggedUserId: null,
};

SubBar.propTypes = {
  loggedUserId: propTypes.string,
  postId: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  caption: propTypes.string.isRequired,
  likes: propTypes.shape({
    _id: propTypes.string.isRequired,
    nodes: propTypes.arrayOf(propTypes.shape({
      username: propTypes.string,
      profilePic: propTypes.string,
    })).isRequired,
  }).isRequired,
};
