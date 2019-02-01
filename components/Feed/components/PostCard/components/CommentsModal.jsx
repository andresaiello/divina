import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { ListItemAvatar, Avatar } from '@material-ui/core';

import { FullscreenModal } from '~/components/shared/';
import CommentInput from './CommentInput';

const StyledList = styled(List)`
  overflow-y: scroll;
`;

function CommentsModal ({ isOpen, close, comments }) {
  const commentsList = comments.nodes.length
    ? (
      <StyledList>
        {comments.nodes.map(({ _id, content, author: { username } }) => (
          <ListItem key={_id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="avatar" src="/static/girl.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary={(
                <Fragment>
                  <Typography component="span" color="textPrimary">
                    {content}
                  </Typography>
                  {`- ${username}`}
                </Fragment>
              )}
            />
          </ListItem>
        ))}
      </StyledList>
    )
    : null;

  return (
    <FullscreenModal
      title="Comentarios"
      {...{ isOpen, close }}
    >
      {commentsList}
      <CommentInput />
    </FullscreenModal>
  );
}

CommentsModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};

export default CommentsModal;
