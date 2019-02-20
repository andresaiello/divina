import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from '~/server/routes';

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

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

function HeadAppBar (props) {
  return (
    <StyledAppBar position="static" {...props}>
      <Toolbar className="toolbar">
        <Typography variant="h6" color="inherit" className="disable-select">
          <Link route="/feed" prefetch><a>Divina</a></Link>
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default HeadAppBar;
