import React, { Fragment, Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import {
  Fab,
  AppBar,
  Toolbar,
  CircularProgress,
  IconButton,
} from '@material-ui/core';
import {
  ChatBubbleOutline as Chat,
  Search as SearchIcon,
  Home as HomeIcon,
  Person as ProfileIcon,
  AddCircleOutline as AddIcon,
} from '@material-ui/icons';
import Dropzone from 'react-dropzone';

import SecContext from '~/context/secContext';
import PictureUploadContext from '~/context/PictureUploadContext';
import { Link, Router } from '~/server/routes';
import { readImageAsBase64 } from '~/util';
import UploadImageContainer from './UploadImageContainer';

const StyledAppBar = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;
    background-color: white;
    color: black;

    @media screen and (max-height: 350px) {
      .toolbar {
        display: none;
      }
    }

    .toolbar {
      justify-content: space-between;
    }

    a {
      color: black;
    }

    #fileupload {
      display: none;
    }

    .upload {
      height: 2.5rem;
      width: 2.5rem;
    }

    .camera {
      margin-top: 5px;
    }
  }
`;

class BottomAppBar extends Component {
  static contextType = SecContext;

  state = {
    uploading: false,
  };

  render () {
    const { uploading } = this.state;

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
            <UploadImageContainer
              icon={<AddIcon className="fab upload" color="primary" aria-label="Add" />}
            />
            <Link route="chatList" prefetch>
              <a>
                <IconButton color="inherit">
                  <img width="22" src="/static/chatBlack.png" alt="chat" />
                </IconButton>
              </a>
            </Link>
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
