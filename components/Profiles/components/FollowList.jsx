import React from 'react';
import propTypes from 'prop-types';
import {
  ListItemAvatar, Avatar, List, Typography, ListItem, ListItemText,
} from '@material-ui/core';

export default function FollowList ({ elements }) {
  return (
    <List>
      {elements.map(({ _id, username, profilePic }) => (
        <ListItem key={_id} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="avatar" src={profilePic} />
          </ListItemAvatar>
          <ListItemText
            primary={(
              <Typography className="commentText" component="p" color="textPrimary">
                {username}
              </Typography>
            )}
          />
        </ListItem>
      ))}
    </List>
  );
}


FollowList.propTypes = {
  elements: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
  })).isRequired,
};
