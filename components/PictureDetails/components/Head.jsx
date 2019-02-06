import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  AppBar, Toolbar, Avatar, IconButton,
} from '@material-ui/core';
import { ChevronLeft, MoreHoriz } from '@material-ui/icons';

import { Link } from '~/server/routes';
import { FollowButton } from '~/components/shared';

const StyledAppBar = styled(AppBar)`
  && {
    .toolbar {
      padding: 0px 8px;
      justify-content: space-between;
    }

    .leftContent {
      display: flex;
      align-items: center;
    }

    h5 {
      margin-left: 5px;
    }
  }
`;

function Head ({ username, profilePic, ...rest }) {
  return (
    <StyledAppBar position="static" color="primary" {...rest}>
      <Toolbar className="toolbar">
        <div className="leftContent">
          <Link route="profile" params={{ username }} prefetch>
            <ChevronLeft />
          </Link>
          <Avatar className="avatar" src={profilePic} alt="Foto de perfil" />
          <h5>{username}</h5>
        </div>
        <div>
          <FollowButton isFollowing={Math.random() < 0.5} />
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

Head.propTypes = {
  username: propTypes.string.isRequired,
  profilePic: propTypes.string.isRequired,
};

export default Head;
