import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import getConfig from 'next/config';
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

import { CREATE_POST } from '~/lib/queries';
import SecContext from '~/context/secContext';
import { Link, Router } from '~/server/routes';
import { Mutation } from 'react-apollo';

const { publicRuntimeConfig } = getConfig();
const { CLOUDINARY_UPLOAD_URL, CLOUDINARY_PRESET } = publicRuntimeConfig;

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

  constructor (props) {
    super(props);
    this.state = {
      uploading: false,
    };
  }

  onDropImage = (acceptedFiles, rejectedFiles) => {
    const { user } = this.context;
    this.setState({ uploading: true });

    let fileToSend = null;
    Array.from(acceptedFiles).forEach((file, i) => {
      fileToSend = file;
    });

    const formData = new FormData();
    formData.append('file', fileToSend);
    formData.append('upload_preset', CLOUDINARY_PRESET); // se configura en cloudinary
    formData.append('multiple', true);
    formData.append('tags', `${user._id}, ${user.name}, ${user.username}`);
    formData.append('context', '');

    fetch(CLOUDINARY_UPLOAD_URL, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({ uploading: false });
        this.onPhotoUploaded(response.public_id, response);
      });
  }

  // onPhotoUploadProgress (id, response) {
  //   console.log(id);
  //   console.log(response);
  // }

  onPhotoUploaded = (_, response) => {
    Router.pushRoute('uploadPicture', { picUrl: response.secure_url });
  }

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
            <Fab className="fab upload" aria-label="Add">
              {uploading
                ? <CircularProgress />
                : (
                  <Dropzone
                    onDrop={(accepted, rejected) => { this.onDropImage(accepted, rejected); }}
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
    );
  }
}

export default BottomAppBar;
