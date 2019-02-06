import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    color: black;

    .toolbar {
      justify-content: center;
    }

    h6 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
  }
`;

function HeadAppBar (props) {
  return (
    <StyledAppBar position="static" {...props}>
      <Toolbar className="toolbar">
        <Typography variant="h6" color="inherit">
          Divina
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default HeadAppBar;
