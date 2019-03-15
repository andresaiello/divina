import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  AppBar, Toolbar, Avatar, IconButton, Typography,
} from '@material-ui/core';
import { ChevronLeft, MoreHoriz } from '@material-ui/icons';

import { Link } from '~/server/routes';
import { FollowButton } from '~/components/shared';

const StyledAppBar = styled(AppBar)`
  && {
    background: white;
    color: rgb(74, 74, 74);

    .toolbar {
      padding: 0px 8px;
      justify-content: space-between;
    }

    .leftContent {
      display: flex;
      align-items: center;
    }

    .avatar {
      margin: 0 10px 0 2px;
      border: 2px solid rgb(255, 0, 173);
    }

    .backIcon {
      color: rgb(1, 145, 255);
      width: 2rem;
      height: 2rem;
    }

    h4 {
      font-size: 1.15rem;
      margin: 0px;
    }
  }
`;

function Head ({ username, profilePic, ...rest }) {
  return (
    <StyledAppBar position="static" {...rest}>
      <Toolbar className="toolbar">
        <div className="leftContent">
          <Link route="profile" params={{ username }} prefetch>
            <ChevronLeft className="backIcon" />
          </Link>
          <Avatar className="avatar" src={profilePic} alt="Foto de perfil" />
          <Typography component="h4">{username}</Typography>
        </div>
        <div>
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
