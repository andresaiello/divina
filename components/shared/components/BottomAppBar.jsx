import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CameraIcon from '@material-ui/icons/CameraAlt';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ProfileIcon from '@material-ui/icons/Person';

import { Link } from '~/routes';

const StyledAppBar = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;

    .toolbar {
      justify-content: space-between;
    }
  }
`;

function BottomAppBar (props) {
  return (
    <Fragment>
      <StyledAppBar position="fixed" {...props}>
        <Toolbar className="toolbar">
          <Link route="feed">
            <IconButton color="inherit" aria-label="Open drawer">
              <HomeIcon />
            </IconButton>
          </Link>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <CameraIcon />
          </IconButton>
          <Link route="profile">
            <IconButton color="inherit">
              <ProfileIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </StyledAppBar>
    </Fragment>
  );
}

export default BottomAppBar;
