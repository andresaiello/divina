import React, { useContext } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  ListItemAvatar, Avatar, List, Typography, ListItem, ListItemText,
} from '@material-ui/core';

import SecContext from '~/context/secContext';
import { Link } from '~/server/routes';
import { FollowButton } from '~/components/shared';

const StyledList = styled(List)`
  .item {
    padding: 8px 0px 12px 0px;
    margin: 0px auto;
    width: 90%;
    border-top: 1px solid #9B9B9B;

    :first-child {
      border: none;
    }

  }

  .avatar {
    width: 55px;
    height: 55px;
  }

  .textContainer {
    padding-top: 5px;

    .text {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .button {
    align-self: center;
  }
`;

export default function FollowList ({ elements }) {
  const context = useContext(SecContext);

  const loggedUserId = context.user && context.user._id;

  return (
    <StyledList>
      {elements.map(({
        _id, username, profilePic, followedByLoggedUser,
      }) => (
        <ListItem key={_id} className="item" alignItems="flex-start">
          <ListItemAvatar>
            <Link route="profile" params={{ username }} prefetch>
              <Avatar className="avatar" alt="avatar" src={profilePic} />
            </Link>
          </ListItemAvatar>
          <ListItemText
            className="textContainer"
            primary={(
              <Link route="profile" params={{ username }} prefetch>
                <Typography className="text" component="p" color="textPrimary">
                  {username}
                </Typography>
              </Link>
            )}
          />
          <FollowButton
            className="button"
            isFollowing={followedByLoggedUser.isFollowing}
            author={loggedUserId}
            receiver={_id}
          />
        </ListItem>
      ))}
    </StyledList>
  );
}


FollowList.propTypes = {
  elements: propTypes.arrayOf(propTypes.shape({
    _id: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    profilePic: propTypes.string.isRequired,
  })).isRequired,
};
