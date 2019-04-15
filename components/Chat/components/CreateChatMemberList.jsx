import React, { useContext } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {
  ListItemAvatar, Avatar, List, Typography, ListItem, ListItemText,
} from '@material-ui/core';

import SecContext from '~/context/secContext';
import { Link, Router } from '~/server/routes';
import Checkbox from '@material-ui/core/Checkbox';

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

export default class CreateChatMemberList extends React.PureComponent {
    static contextType = SecContext;


    render () {
      const { elements, handleEditMembers, selectedMembers } = this.props;
      const { user } = this.context;
      const loggedUserId = user && user._id;

      return (
        <StyledList>
          {elements.map(({
            _id, username, profilePic,
          }) => (
            <ListItem key={_id} className="item" alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  className="avatar"
                  alt="avatar"
                  src={profilePic}
                  onClick={() => Router.pushRoute('profile', { username })}
                />
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
              <Checkbox
                // checked={this.state.selectedValue === 'd'}
                checked={selectedMembers.includes(_id)}
                onChange={() => handleEditMembers(_id)}
                value={_id}
                color="default"
                name="radio-button"
              />
              {/* <FollowButton
            className="button"
            isFollowing={followedByLoggedUser.isFollowing}
            author={loggedUserId}
            receiver={_id}
          /> */}
            </ListItem>
          ))}
        </StyledList>
      );
    }
}


// CreateChatMemberList.propTypes = {
//   elements: propTypes.arrayOf(propTypes.shape({
//     _id: propTypes.string.isRequired,
//     username: propTypes.string.isRequired,
//     profilePic: propTypes.string.isRequired,
//   })).isRequired,
// };
