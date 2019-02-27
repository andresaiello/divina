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
  Chat,
  CameraAlt as CameraIcon,
  Search as SearchIcon,
  HomeOutlined as HomeIcon,
  Person as ProfileIcon,
} from '@material-ui/icons';
import Dropzone from 'react-dropzone';

import SecContext from '~/context/secContext';
import PictureUploadContext from '~/context/PictureUploadContext';
import { Link, Router } from '~/server/routes';

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

    #fileupload {
      display: none;
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

  onDropImage = (acceptedFiles, rejectedFiles, uploadPicture) => {
    this.setState({ uploading: true });

    let fileToSend = null;
    Array.from(acceptedFiles).forEach((file) => { fileToSend = file; });

    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        uploadPicture({ src: reader.result, width: img.width, height: img.height }, () => Router.pushRoute('uploadPicture'));
      };
      img.src = reader.result;
    };

    if (fileToSend) {
      reader.readAsDataURL(fileToSend);
    }
  }

  // onPhotoUploadProgress (id, response) {
  //   console.log(id);
  //   console.log(response);
  // }

  onPhotoUploaded = (_, response) => {
    Router.pushRoute('uploadPicture');
  }

  render () {
    const { uploading } = this.state;

    return (
      <PictureUploadContext.Consumer>
        {({ uploadPicture }) => (
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
                  {uploading
                    ? <CircularProgress />
                    : (
                      <Dropzone
                        onDrop={(accepted, rejected) => { this.onDropImage(accepted, rejected, uploadPicture); }}
                        className="drop-zone"
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()} className="button-small">
                            <input {...getInputProps()} />
                            <CameraIcon className="camera" color="primary" />
                          </div>
                        )}
                      </Dropzone>
                    )
                            }
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
        )}
      </PictureUploadContext.Consumer>
    );
  }
}

export default BottomAppBar;
