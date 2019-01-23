import React, { Fragment } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

const StyledAppBar = styled(AppBar)`
  && {
    top: auto;
    bottom: 0;
  }
`;

function BottomAppBar (props) {
  return (
    <Fragment>
      <StyledAppBar position="fixed" {...props}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <div>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </StyledAppBar>
    </Fragment>
  );
}

export default BottomAppBar;
