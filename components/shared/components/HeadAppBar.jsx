import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from '~/server/routes';
import PictureUploadContext from '~/context/PictureUploadContext';
import UploadImageContainer from './UploadImageContainer';

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

    h5 {
      font-size: 1.9rem;
      margin-bottom: 5px;
    }

    a {
      color: black;
      text-decoration: none;
    }
  }
`;

function HeadAppBar(props) {
  return (
    <StyledAppBar position="static" {...props}>
      <Toolbar className="toolbar">
        <UploadImageContainer
          icon={<img width="32" src="/static/pinkBlackLogo.png" alt="Cámara" />}
        />
        <Typography variant="h5" color="inherit" className="disable-select">
          <Link route="/feed" prefetch>
            <a>Divina</a>
          </Link>
        </Typography>
        <Link route="/discover" prefetch>
          <img width="26" src="/static/ShopBag.svg" alt="ShopBag" />
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
}

export default HeadAppBar;
