import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { Add, Chat } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/CameraAlt';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ProfileIcon from '@material-ui/icons/Person';

import { Link } from '~/server/routes';

const StyledAppBar = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;

    .toolbar {
      justify-content: space-between;
    }

    a {
      color: white;
    }
  }
`;

function BottomAppBar (props) {
  return (
    <Fragment>
      <StyledAppBar position="fixed" {...props}>
        <Toolbar className="toolbar">
          <Link route="feed" prefetch>
            <a>
              <IconButton color="inherit" aria-label="Open drawer">
                <HomeIcon />
              </IconButton>
            </a>
          </Link>
          <Link route="discover" prefetch>
            <a>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </a>
          </Link>
          <Fab className="fab" aria-label="Add">
            <CameraIcon />
          </Fab>
          <IconButton color="inherit">
            <Chat />
          </IconButton>
          <Link route="myProfile" prefetch>
            <a>
              <IconButton color="inherit">
                <ProfileIcon />
              </IconButton>
            </a>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </Fragment>
  );
}

export default BottomAppBar;
