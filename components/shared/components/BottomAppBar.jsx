import React, { Fragment, Component } from 'react';
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
    background-color: white;
    color: black;

    .toolbar {
      justify-content: space-between;
    }

    a {
      color: black;
    }

    #upload {
      display: none;
    }
  }
`;

class BottomAppBar extends Component {
  uploadRef = {}

  render () {
    return (
      <Fragment>
        <StyledAppBar position="fixed" {...this.props}>
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
            <Fab className="fab upload" aria-label="Add">
              <input type="file" id="upload" ref={(ref) => { this.uploadRef = ref; }} />
              <CameraIcon color="primary" onClick={() => this.uploadRef.click()} />
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
}

export default BottomAppBar;
