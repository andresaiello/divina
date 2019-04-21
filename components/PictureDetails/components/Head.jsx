import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  AppBar, Toolbar, Avatar, Typography,
} from '@material-ui/core';
import { ChevronLeft } from '@material-ui/icons';

import { Router } from '~/server/routes';
import { MoreOptionsButton } from '~/components/shared';

const StyledAppBar = styled(AppBar)`
  && {
    background: white;
    color: rgb(74, 74, 74);
    box-shadow: none;
    border-bottom: 1px solid rgb(218,218,219);
    margin-bottom: 2px;

    .toolbar {
      min-height: 45px;
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

function Head ({
  username, profilePic, openMoreOptionsModal, ...rest
}) {
  return (
    <StyledAppBar position="static" {...rest}>
      <Toolbar className="toolbar">
        <div className="leftContent">
          <ChevronLeft
            className="backIcon"
            onClick={() => Router.back()}
          />
          <Avatar className="avatar" src={profilePic} alt="Foto de perfil" />
          <Typography component="h4">{username}</Typography>
        </div>
        <div>
          <MoreOptionsButton openModal={openMoreOptionsModal} />
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

Head.propTypes = {
  username: propTypes.string.isRequired,
  profilePic: propTypes.string.isRequired,
  openMoreOptionsModal: propTypes.func.isRequired,
};

export default Head;
