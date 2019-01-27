import React from 'react';
import styled from 'styled-components';
import {
  AppBar, Toolbar, Avatar, IconButton, Button,
} from '@material-ui/core';
import { ChevronLeft, MoreHoriz } from '@material-ui/icons';

import { Link } from '~/server/routes';

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

function Head (props) {
  return (
    <StyledAppBar position="static" color="primary" {...props}>
      <Toolbar className="toolbar">
        <div className="leftContent">
          <Link route="profile" params={{ username: '126' }} prefetch>
            <ChevronLeft />
          </Link>
          <Avatar className="avatar" src="/static/girl.jpeg" alt="Foto de perfil" />
          <h5>Chica del avatar</h5>
        </div>
        <div>
          <Button>Siguiendo</Button>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Head;
