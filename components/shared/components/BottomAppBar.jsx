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
import Dropzone from 'react-dropzone';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CREATE_POST } from '~/lib/queries';

import SecContext from '~/context/secContext';

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

    #fileupload {
      display: none;
    }

    .circular-progress {
      position: fixed;
      top: 50vh;
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

    const url = 'https://api.cloudinary.com/v1_1/da9cucer2/upload';

    let fileToSend = null;
    Array.from(acceptedFiles).forEach((file, i) => {
      fileToSend = file;
    });

    const formData = new FormData();
    formData.append('file', fileToSend);
    formData.append('upload_preset', 'ov3f36hw'); // se configura en cloudinary
    formData.append('multiple', true);
    formData.append('tags', `${user._id}, ${user.name}, ${user.username}`);
    formData.append('context', '');

    fetch(url, {
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

  onPhotoUploaded = (id, response) => {
    const { user } = this.context;

    // TODO: acceder a __APOLLO_CLIENT__ desde el componente
    __APOLLO_CLIENT__.mutate({
      mutation: CREATE_POST,
      variables: { author: user._id, picUrl: response.secure_url },
    })
      .then(response => console.log(response));
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
                  {this.state.uploading && (
                  <CircularProgress className="circular-progress" />
                  )}
                  <Dropzone
                    onDrop={(accepted, rejected) => { this.onDropImage(accepted, rejected); }}
                    className="drop-zone"
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps()} className="button-small">
                        <input {...getInputProps()} />
                        <CameraIcon color="primary" />
                      </div>
                    )}
                  </Dropzone>

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
