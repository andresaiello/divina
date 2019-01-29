import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { ListItemAvatar, Avatar } from '@material-ui/core';

import { FullscreenModal } from '~/components/shared/';
import CommentInput from './CommentInput';

function CommentsModal ({ isOpen, close }) {
  return (
    <FullscreenModal
      title="Comentarios"
      {...{ isOpen, close }}
    >
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatar" src="/static/girl.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={(
              <Fragment>
                <Typography component="span" color="textPrimary">
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </Fragment>
            )}
          />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatar" src="/static/girl.jpeg" />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={(
              <Fragment>
                <Typography component="span" color="textPrimary">
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </Fragment>
            )}
          />
        </ListItem>
      </List>
      <CommentInput />
    </FullscreenModal>
  );
}

CommentsModal.propTypes = {
  isOpen: propTypes.bool.isRequired,
  close: propTypes.func.isRequired,
};

export default CommentsModal;
