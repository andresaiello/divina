import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Add from '@material-ui/icons/Add';

import { Link } from '~/server/routes';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: white;
    color: black;
    border-bottom: 1px solid rgb(216, 216, 216);
    box-shadow: none;
    padding: 0;

    .toolbar {
      min-height: 40px;
      justify-content: space-between;
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

function CreateChatHeadAppBar (props) {
  return (
    <StyledAppBar position="static" {...props}>
      <Toolbar className="toolbar">
        <Link route="/chat" prefetch><KeyboardArrowLeft /></Link>

        <Typography variant="p" color="inherit" className="disable-select">
          Nueva conversación
        </Typography>
        <Typography variant="p" color="inherit" className="disable-select" onClick={() => props.onNext()}>
          {props.stepNumber === 0 ? 'Siguiente' : 'Crear'}
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default CreateChatHeadAppBar;
