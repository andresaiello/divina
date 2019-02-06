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
  uploadRef = (event) => {
    console.log(event);
    this.onPhotoSelected(event.target.files);
  }

  onPhotoSelected = (files) => {
    console.log('==');
    console.log(files);

    const url = 'https://api.cloudinary.com/v1_1/da9cucer2/upload';

    const file = files[0];

    console.log('==1');

    console.log(file.name);

    let fileToSend = null;
    Array.from(files).forEach((file, i) => {
      fileToSend = file;
    });

    const formData = new FormData();
    formData.append('file', fileToSend);
    formData.append('upload_preset', 'ov3f36hw');
    formData.append('multiple', true);
    formData.append('tags', 'myphotoalbum');
    formData.append('context', '');

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  onPhotoUploadProgress (id, fileName, progress) {
    console.log(progress);
  }

  onPhotoUploaded (id, fileName, response) {
    console.log(response);
  }


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
              <input
                type="file"
                id="fileupload"
                accept="image/*"
                ref={fileInputEl => (this.fileInputEl = fileInputEl)}
                onChange={() => this.onPhotoSelected(
                  this.fileInputEl.files,
                )}
              />
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
