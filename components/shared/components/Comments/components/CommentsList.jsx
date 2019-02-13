import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  ListItemAvatar, Avatar, List, Typography, ListItem, ListItemText,
} from '@material-ui/core';

const StyledList = styled(List)`
  && {
    overflow-y: scroll;
    margin-bottom: 60px;

    .commentText {
      word-wrap: break-word;
    }
  }
`;

export default function CommentsList ({ comments }) {
  return (
    <StyledList>
      {comments.nodes.map(({ _id, content, author: { username, profilePic } }) => (
        <ListItem key={_id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatar" src={profilePic} />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Fragment>
                <Typography className="commentText" component="p" color="textPrimary">
                  {content}
                </Typography>
                {`- ${username}`}
              </Fragment>
            )}
          />
        </ListItem>
      ))}
    </StyledList>
  );
}

CommentsList.propTypes = {
  comments: propTypes.shape({
    nodes: propTypes.arrayOf(propTypes.shape({
      _id: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
      author: propTypes.shape({
        username: propTypes.string.isRequired,
        profilePic: propTypes.string.isRequired,
      }).isRequired,
    })),
  }).isRequired,
};
